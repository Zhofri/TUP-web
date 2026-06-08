import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Deployment — TUP Enterprise",
    description:
        "Understand the TUP engagement model: from initial contact to controlled evaluation, deployment, and ongoing support.",
};

const STEPS = [
    {
        step: "01",
        title: "Contact",
        description:
            "Reach out to our team to discuss your infrastructure requirements. We'll schedule a brief conversation to understand your environment and use case.",
    },
    {
        step: "02",
        title: "Fit Review",
        description:
            "Our engineering team evaluates compatibility with your current systems and deployment preferences. We provide a clear recommendation on scope and approach.",
    },
    {
        step: "03",
        title: "Controlled Evaluation",
        description:
            "We provide a controlled evaluation package for your team to test TUP in an isolated environment. You assess performance, reliability, and integration before any commitment.",
    },
    {
        step: "04",
        title: "Deployment",
        description:
            "Upon approval, we work with your team to install TUP in your target environment — on-premise, private cloud, or isolated infrastructure — with full configuration support.",
    },
    {
        step: "05",
        title: "Onboarding & Support",
        description:
            "Your team receives integration documentation, operational guidance, and direct access to our engineering support throughout your license term.",
    },
];

const MODALITIES = [
    {
        title: "On-Premise",
        description:
            "Full installation within your own data centers. Complete control over data, access, and network boundaries.",
    },
    {
        title: "Private Cloud",
        description:
            "Deployed within your private cloud infrastructure (AWS VPC, Azure Private, GCP Private). Isolated from public traffic.",
    },
    {
        title: "Isolated Evaluation",
        description:
            "A standalone environment for testing and evaluation. No production dependencies. Clean setup and teardown.",
    },
    {
        title: "Controlled Hybrid",
        description:
            "For organizations running agents across multiple environments. TUP adapts to distributed topologies with consistent behavior.",
    },
];

export default function DeploymentPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Header */}
                <section className="pt-32 pb-16 px-6">
                    <div className="container-narrow text-center">
                        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
                            Engagement Model
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            How We Work With You
                        </h1>
                        <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
                            TUP is a managed deployment — you don&apos;t need to understand the
                            internals to adopt it. Our team handles evaluation, installation,
                            and ongoing support.
                        </p>
                    </div>
                </section>

                {/* Engagement Steps */}
                <section className="pb-20 px-6">
                    <div className="container-narrow max-w-3xl">
                        <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-8">
                            From Contact to Production
                        </h2>
                        <div className="space-y-6">
                            {STEPS.map((s) => (
                                <div key={s.step} className="glass-card p-7 flex items-start gap-5">
                                    <span className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent-glow)] border border-[var(--color-accent-soft)] flex items-center justify-center text-sm font-bold text-[var(--color-accent)]">
                                        {s.step}
                                    </span>
                                    <div>
                                        <h3 className="text-base font-semibold">{s.title}</h3>
                                        <p className="mt-1.5 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {s.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Deployment Modalities */}
                <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
                    <div className="container-narrow px-6">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
                                Deployment Options
                            </p>
                            <h2 className="text-3xl font-bold">
                                Install Where You Need It
                            </h2>
                            <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto">
                                You choose the environment. We handle the configuration.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                            {MODALITIES.map((m) => (
                                <div key={m.title} className="glass-card p-7">
                                    <h3 className="text-base font-semibold">{m.title}</h3>
                                    <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                        {m.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding text-center">
                    <div className="container-narrow px-6">
                        <h2 className="text-3xl font-bold">
                            Ready to start the conversation?
                        </h2>
                        <p className="mt-3 text-[var(--color-text-secondary)]">
                            No commitments. No pressure. Just a clear evaluation of whether
                            TUP is the right fit for your infrastructure.
                        </p>
                        <Link href="/contact" className="btn-primary mt-8 inline-flex">
                            Contact Sales →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
