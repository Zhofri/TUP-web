"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
    { label: "Product", href: "/product" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Security", href: "/security" },
    { label: "Deployment", href: "/deployment" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50" style={{
            background: "rgba(10,10,15,0.85)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--color-border-subtle)",
        }}>
            <div className="container-narrow flex items-center justify-between h-16 px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 no-underline">
                    <span className="text-gradient font-bold text-xl tracking-tight">TUP</span>
                    <span className="text-[var(--color-text-muted)] text-xs font-medium tracking-widest uppercase hidden sm:inline">
                        Enterprise
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors no-underline"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" className="btn-primary text-sm !py-2 !px-5">
                        Talk to Sales
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-5 h-0.5 bg-[var(--color-text-primary)] transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-[var(--color-text-primary)] transition-opacity ${open ? 'opacity-0' : ''}`} />
                    <span className={`block w-5 h-0.5 bg-[var(--color-text-primary)] transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden border-t border-[var(--color-border-subtle)]" style={{ background: "rgba(10,10,15,0.95)" }}>
                    <div className="flex flex-col gap-1 px-6 py-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] py-2 no-underline"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary text-sm mt-2 justify-center">
                            Talk to Sales
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
