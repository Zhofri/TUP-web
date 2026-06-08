"use server";

import { readdir, readFile } from "fs/promises";
import { join } from "path";

export interface Lead {
    name: string;
    company: string;
    title: string;
    email: string;
    useCase: string;
    projectSize: string;
    message: string;
    submittedAt: string;
    source: string;
    qualification?: {
        score: number;
        tier: "HOT" | "WARM" | "COLD";
        breakdown: string[];
    };
}

export async function getLeads(): Promise<Lead[]> {
    try {
        const leadsDir = join(process.cwd(), "leads");
        const files = await readdir(leadsDir);
        const jsonFiles = files.filter(f => f.endsWith(".json"));

        const leads: Lead[] = [];

        for (const file of jsonFiles) {
            const content = await readFile(join(leadsDir, file), "utf-8");
            leads.push(JSON.parse(content));
        }

        // Sort leads by score (descending), then by date (newest first)
        return leads.sort((a, b) => {
            const scoreA = a.qualification?.score || 0;
            const scoreB = b.qualification?.score || 0;
            if (scoreA !== scoreB) {
                return scoreB - scoreA;
            }
            return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
        });
    } catch (e) {
        console.error("Failed to read leads directory:", e);
        return [];
    }
}
