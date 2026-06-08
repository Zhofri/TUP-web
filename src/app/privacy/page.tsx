import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — TUP Enterprise",
    description: "Privacy Policy for telepathy-tup.com.",
};

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main>
                <section className="pt-32 pb-24 px-6">
                    <div className="container-narrow max-w-3xl">
                        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
                        <div className="space-y-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                            <p><strong className="text-[var(--color-text-primary)]">Effective Date:</strong> March 2026</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">1. Information We Collect</h2>
                            <p>When you submit the contact form on telepathy-tup.com, we collect: your name, company name, job title, corporate email address, use case description, estimated project scale, and your message. We do not use cookies for tracking or advertising purposes. We do not collect information from third-party sources.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">2. How We Use Your Information</h2>
                            <p>We use the information you provide solely to respond to your inquiry, evaluate the suitability of TUP for your environment, and discuss potential licensing arrangements. We do not sell, rent, trade, or share your personal data with third parties for any purpose.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">3. Data Retention</h2>
                            <p>We retain your contact information for the duration of our business relationship or evaluation process. You may request the deletion of all your personal data at any time by contacting us at the address below.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">4. Data Security</h2>
                            <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. All submissions are processed through secured channels and stored with appropriate access controls.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">5. Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal information. You may also request information about how your data is being used. To exercise these rights, contact us using the address below.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">6. Contact</h2>
                            <p>For questions about this policy, contact us at <a href="mailto:legal@telepathy-tup.com" className="text-[var(--color-accent)] hover:underline">legal@telepathy-tup.com</a>.</p>

                            <div className="mt-12 pt-6 border-t border-[var(--color-border-subtle)]">
                                <p className="text-xs text-[var(--color-text-muted)]">© 2026 Telepathy TUP. All Rights Reserved. Telepathy Universal Protocol™ is proprietary technology.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
