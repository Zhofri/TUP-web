import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service — TUP Enterprise",
    description: "Terms of Service for telepathy-tup.com and TUP Enterprise licensing.",
};

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main>
                <section className="pt-32 pb-24 px-6">
                    <div className="container-narrow max-w-3xl">
                        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
                        <div className="space-y-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                            <p><strong className="text-[var(--color-text-primary)]">Effective Date:</strong> March 2026</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">1. Proprietary Technology</h2>
                            <p>The Telepathy Universal Protocol™ (&quot;TUP&quot;) is proprietary technology developed and owned exclusively by its creator. All algorithms, data structures, protocol specifications, compiled binaries, documentation, and associated materials constitute trade secrets and are protected under applicable intellectual property laws.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">2. License Grant</h2>
                            <p>TUP Enterprise is distributed under a B2B Proprietary License. Upon execution of a licensing agreement, you receive a non-exclusive, non-transferable, revocable license to use TUP solely in accordance with the terms of your specific agreement. No license is granted by implication, estoppel, or otherwise.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">3. Restrictions</h2>
                            <p>You may not, directly or indirectly: (a) reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code, algorithms, or internal structure of TUP; (b) copy, reproduce, modify, adapt, or create derivative works of TUP; (c) redistribute, sublicense, sell, lease, or transfer TUP to any third party; (d) use TUP for competitive analysis, benchmarking for publication, or the development of competing products; (e) remove, alter, or obscure any proprietary notices, labels, or markings from TUP materials.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">4. Intellectual Property</h2>
                            <p>All intellectual property rights in and to TUP — including but not limited to patents, copyrights, trade secrets, and trademarks — remain the sole and exclusive property of the licensor. Nothing in these terms transfers any ownership rights to you.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">5. Confidentiality</h2>
                            <p>Any technical documentation, performance data, integration guides, or other materials provided during the evaluation or licensing process are confidential information. You agree not to disclose such information to third parties without prior written consent.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">6. Limitation of Liability</h2>
                            <p>TUP is provided &quot;as is&quot; without warranty of any kind, express or implied. In no event shall the licensor be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of or inability to use TUP.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">7. Termination</h2>
                            <p>The licensor may terminate your license immediately upon written notice if you breach any term of these Terms of Service or the applicable licensing agreement. Upon termination, you must cease all use of TUP and destroy all copies in your possession.</p>

                            <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mt-8">8. Contact</h2>
                            <p>For licensing inquiries, contact <a href="mailto:sales@telepathy-tup.com" className="text-[var(--color-accent)] hover:underline">sales@telepathy-tup.com</a>. For legal matters, contact <a href="mailto:legal@telepathy-tup.com" className="text-[var(--color-accent)] hover:underline">legal@telepathy-tup.com</a>.</p>

                            <div className="mt-12 pt-6 border-t border-[var(--color-border-subtle)]">
                                <p className="text-xs text-[var(--color-text-muted)]">© 2026 Telepathy TUP. All Rights Reserved. Telepathy Universal Protocol™ is proprietary technology. Unauthorized use, reproduction, reverse engineering, or distribution is strictly prohibited and may result in legal action.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
