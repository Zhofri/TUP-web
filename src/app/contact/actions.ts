"use server";

import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

interface ContactFormData {
    name: string;
    company: string;
    title: string;
    email: string;
    useCase: string;
    projectSize: string;
    message: string;
}

export async function submitContactForm(formData: FormData) {
    const data: ContactFormData = {
        name: formData.get("name") as string,
        company: formData.get("company") as string,
        title: formData.get("title") as string,
        email: formData.get("email") as string,
        useCase: formData.get("useCase") as string,
        projectSize: formData.get("projectSize") as string,
        message: formData.get("message") as string,
    };

    // Validation
    if (!data.name || !data.company || !data.email || !data.message) {
        return { success: false, error: "Please fill in all required fields." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return { success: false, error: "Please enter a valid email address." };
    }

    try {
        // === SCORING ENGINE ===
        let score = 0;
        const scoringBreakdown: string[] = [];

        // 1. Job Title (+20 for decision makers)
        const decisionMakerTitles = ["cto", "cio", "vp", "director", "head", "chief", "founder", "ceo"];
        const lowerTitle = data.title.toLowerCase();
        if (decisionMakerTitles.some(t => lowerTitle.includes(t))) {
            score += 20;
            scoringBreakdown.push("+20: Decision-maker title");
        }

        // 2. Corporate Email (+25 for non-free domains)
        const freeDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "icloud.com"];
        const domain = data.email.split("@")[1]?.toLowerCase();
        if (domain && !freeDomains.includes(domain)) {
            score += 25;
            scoringBreakdown.push("+25: Corporate email domain");
        }

        // 3. Project Size / Scale
        if (data.projectSize === "enterprise") {
            score += 20;
            scoringBreakdown.push("+20: Enterprise scale");
        } else if (data.projectSize === "large") {
            score += 15;
            scoringBreakdown.push("+15: Large scale (100+ agents)");
        }

        // 4. Use Case Selection (+10)
        if (data.useCase && data.useCase !== "evaluation" && data.useCase !== "other") {
            score += 10;
            scoringBreakdown.push("+10: Specific use case selected");
        }

        // 5. Engagement (+10 for detailed message)
        if (data.message.length > 100) {
            score += 10;
            scoringBreakdown.push("+10: Detailed inquiry (>100 chars)");
        }

        // Determine Classification Tier
        let tier: "HOT" | "WARM" | "COLD" = "COLD";
        if (score >= 70) tier = "HOT";
        else if (score >= 40) tier = "WARM";

        const lead = {
            ...data,
            submittedAt: new Date().toISOString(),
            source: "telepathy-tup.com/contact",
            qualification: {
                score,
                tier,
                breakdown: scoringBreakdown
            }
        };

        // Store lead as JSON file (safe fallback for serverless read-only filesystems)
        try {
            const leadsDir = join(process.cwd(), "leads");
            await mkdir(leadsDir, { recursive: true });
            const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
            const filename = `lead_${timestamp}_${data.company.replace(/\s+/g, "_")}_${tier}.json`;
            await writeFile(join(leadsDir, filename), JSON.stringify(lead, null, 2));
        } catch (fsError) {
            console.warn("Local filesystem write skipped (expected on read-only serverless platforms):", fsError);
        }

        // Background integrations (do not block the user response)
        try {
            await appendLeadToGoogleSheets(lead);
        } catch (sheetsError) {
            console.error("Google Sheets append failed:", sheetsError);
        }

        try {
            await sendLeadEmailNotification(lead);
        } catch (emailError) {
            console.error("Email notification failed:", emailError);
        }

        return { success: true, tier, error: null };
    } catch (e) {
        console.error("Form submission error:", e);
        return { success: false, error: "Something went wrong. Please try again or email us directly." };
    }
}

async function appendLeadToGoogleSheets(lead: any) {
    const { google } = require("googleapis");
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!email || !privateKey || !sheetId) {
        console.warn("Google Sheets credentials or Sheet ID missing. Skipping Sheets append.");
        return;
    }

    const auth = new google.auth.JWT({
        email,
        key: privateKey,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"]
    });

    const sheets = google.sheets({ version: "v4", auth });

    const values = [
        [
            lead.submittedAt,
            lead.name,
            lead.company,
            lead.title,
            lead.email,
            lead.useCase,
            lead.projectSize,
            lead.qualification.score,
            lead.qualification.tier,
            lead.message,
            lead.qualification.breakdown.join(", ")
        ]
    ];

    await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: "A:K",
        valueInputOption: "RAW",
        requestBody: { values }
    });
}

async function sendLeadEmailNotification(lead: any) {
    const nodemailer = require("nodemailer");
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.NOTIFICATION_RECEIVER;

    if (!host || !user || !pass || !receiver) {
        console.warn("SMTP settings missing. Skipping email notification.");
        return;
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass }
    });

    const mailOptions = {
        from: `"TUP Lead Bot" <${user}>`,
        to: receiver,
        subject: `🚨 [Lead ${lead.qualification.tier}] ${lead.name} from ${lead.company}`,
        html: `
            <h2>New Qualified Lead Received</h2>
            <p><strong>Name:</strong> ${lead.name}</p>
            <p><strong>Company:</strong> ${lead.company}</p>
            <p><strong>Title:</strong> ${lead.title}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Use Case:</strong> ${lead.useCase}</p>
            <p><strong>Project Size:</strong> ${lead.projectSize}</p>
            <hr />
            <h3>Qualification Scoring:</h3>
            <p><strong>Total Score:</strong> ${lead.qualification.score} / 100</p>
            <p><strong>Tier:</strong> ${lead.qualification.tier}</p>
            <p><strong>Breakdown:</strong></p>
            <ul>
                ${lead.qualification.breakdown.map((b: string) => `<li>${b}</li>`).join("")}
            </ul>
            <hr />
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc;">
                ${lead.message.replace(/\n/g, "<br>")}
            </blockquote>
            <p><small>Submitted at: ${lead.submittedAt}</small></p>
        `
    };

    await transporter.sendMail(mailOptions);
}
