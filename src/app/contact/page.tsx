"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitContactForm } from "./actions";
import { useState } from "react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [tier, setTier] = useState<"HOT" | "WARM" | "COLD" | null>(null);
    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(formData: FormData) {
        setStatus("loading");
        const result = await submitContactForm(formData);
        if (result.success) {
            setTier(result.tier as "HOT" | "WARM" | "COLD");
            setStatus("success");
        } else {
            setErrorMsg(result.error || "Unknown error");
            setStatus("error");
        }
    }

    return (
        <>
            <Navbar />
            <main>
                <section className="pt-32 pb-24 px-6">
                    <div className="container-narrow max-w-2xl">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
                                Get Started
                            </p>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                                Talk to Our Team
                            </h1>
                            <p className="mt-4 text-[var(--color-text-secondary)] text-lg">
                                Tell us about your infrastructure and use case. We&apos;ll
                                evaluate the fit and get back to you with a clear recommendation.
                            </p>
                        </div>

                        {status === "success" ? (
                            <div className="glass-card p-12 text-center">
                                <div className="text-4xl mb-4">✓</div>
                                <h2 className="text-2xl font-bold">Inquiry Received</h2>

                                {tier === "HOT" && (
                                    <div className="mt-6">
                                        <p className="text-[var(--color-text-secondary)] text-lg mb-6">
                                            Based on your profile, your team is an excellent fit for TUP Enterprise. <strong>Our founding team will contact you within 24 hours</strong> to arrange a technical deep-dive.
                                        </p>
                                        <div className="p-6 bg-[var(--color-bg-tertiary)] rounded-lg border border-[var(--color-border-subtle)] text-left">
                                            <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Next Step: Security & Assurance</h3>
                                            <p className="text-sm text-[var(--color-text-secondary)] mb-4">While you wait, review our unredacted Assurance Certification demonstrating TUP&apos;s resilience against Man-in-the-Middle and Swarm Collision attacks.</p>
                                            <a href="/security" className="text-sm font-semibold text-[var(--color-accent)] hover:underline">View Security Architecture →</a>
                                        </div>
                                    </div>
                                )}

                                {tier === "WARM" && (
                                    <div className="mt-6">
                                        <p className="text-[var(--color-text-secondary)] text-lg mb-6">
                                            Thank you for your interest in TUP. Our engineering team will review your infrastructure requirements and follow up shortly with a customized recommendation.
                                        </p>
                                        <div className="pt-6 border-t border-[var(--color-border-subtle)]">
                                            <p className="text-sm text-[var(--color-text-muted)] mb-2">Prepare for your consultation:</p>
                                            <a href="/technology" className="text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)]">Read the Technical Specifications →</a>
                                        </div>
                                    </div>
                                )}

                                {tier === "COLD" && (
                                    <div className="mt-6">
                                        <p className="text-[var(--color-text-secondary)]">
                                            Thanks for reaching out! We&apos;ve received your message and will review it soon. In the meantime, feel free to explore our product documentation to learn more about how TUP works.
                                        </p>
                                    </div>
                                )}

                                <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)]">
                                    <p className="text-xs text-[var(--color-text-muted)]">
                                        For urgent inquiries, contact us directly:
                                    </p>
                                    <p className="text-sm font-medium text-[var(--color-accent)] mt-1">
                                        sales@telepathy-tup.com
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form action={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
                                {/* Name & Company */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                                            Full Name <span className="text-[var(--color-accent)]">*</span>
                                        </label>
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                            placeholder="Jane Smith"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                                            Company <span className="text-[var(--color-accent)]">*</span>
                                        </label>
                                        <input
                                            name="company"
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                </div>

                                {/* Title & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                                            Job Title
                                        </label>
                                        <input
                                            name="title"
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                            placeholder="VP Engineering"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                                            Corporate Email <span className="text-[var(--color-accent)]">*</span>
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                            placeholder="jane@acme.com"
                                        />
                                    </div>
                                </div>

                                {/* Use Case & Project Size */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                                            Primary Use Case
                                        </label>
                                        <select
                                            name="useCase"
                                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                        >
                                            <option value="">Select...</option>
                                            <option value="multi-agent">Multi-Agent Coordination</option>
                                            <option value="distributed-ai">Distributed AI Operations</option>
                                            <option value="autonomous-systems">Autonomous Systems</option>
                                            <option value="fleet-management">Fleet-Scale Agent Management</option>
                                            <option value="evaluation">General Evaluation</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                                            Estimated Scale
                                        </label>
                                        <select
                                            name="projectSize"
                                            className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                                        >
                                            <option value="">Select...</option>
                                            <option value="evaluation">Initial Evaluation / PoC</option>
                                            <option value="small">1–10 agents</option>
                                            <option value="medium">10–100 agents</option>
                                            <option value="large">100+ agents</option>
                                            <option value="enterprise">Enterprise-wide deployment</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-xs font-semibold tracking-wider uppercase text-[var(--color-text-secondary)] mb-2">
                                        How Can We Help? <span className="text-[var(--color-accent)]">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg bg-[var(--color-bg-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                                        placeholder="Describe your current environment and what you're looking to achieve with TUP."
                                    />
                                </div>

                                {/* Error */}
                                {status === "error" && (
                                    <div className="px-4 py-3 rounded-lg bg-red-900/20 border border-red-800/30 text-red-400 text-sm">
                                        {errorMsg}
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="btn-primary w-full justify-center text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Submitting..." : "Submit Inquiry →"}
                                </button>

                                <p className="text-xs text-[var(--color-text-muted)] text-center">
                                    You can also reach us at{" "}
                                    <a
                                        href="mailto:sales@telepathy-tup.com"
                                        className="text-[var(--color-accent)] hover:underline"
                                    >
                                        sales@telepathy-tup.com
                                    </a>
                                </p>
                            </form>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
