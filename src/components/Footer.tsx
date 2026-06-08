import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="border-t border-[var(--color-border-subtle)]"
            style={{ background: "var(--color-bg-secondary)" }}
        >
            <div className="container-narrow px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <span className="text-gradient font-bold text-xl">TUP</span>
                        <p className="text-sm text-[var(--color-text-muted)] mt-3 leading-relaxed">
                            Telepathy Universal Protocol™
                            <br />
                            Proprietary AI Communication Infrastructure.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-secondary)] mb-4">
                            Product
                        </h4>
                        <div className="flex flex-col gap-2.5">
                            <Link href="/product" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors">
                                Product Overview
                            </Link>
                            <Link href="/use-cases" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors">
                                Use Cases
                            </Link>
                            <Link href="/security" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors">
                                Security
                            </Link>
                            <Link href="/deployment" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors">
                                Deployment
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-secondary)] mb-4">
                            Company
                        </h4>
                        <div className="flex flex-col gap-2.5">
                            <Link href="/contact" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors">
                                Contact Sales
                            </Link>
                            <Link href="/privacy" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] no-underline transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-secondary)] mb-4">
                            Get in Touch
                        </h4>
                        <div className="flex flex-col gap-1.5 text-sm text-[var(--color-text-muted)]">
                            <span>sales@telepathy-tup.com</span>
                            <span>support@telepathy-tup.com</span>
                        </div>
                        <Link
                            href="/contact"
                            className="btn-primary text-xs mt-4 !py-2 !px-4"
                        >
                            Request Evaluation
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-6 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[var(--color-text-muted)]">
                        © 2026 Telepathy TUP. All Rights Reserved.
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                        Telepathy Universal Protocol™ is proprietary technology. Unauthorized use, reproduction, or distribution is prohibited.
                    </p>
                </div>
            </div>
        </footer>
    );
}
