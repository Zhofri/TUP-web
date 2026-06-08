import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product — TUP Enterprise",
    description:
        "TUP is a proprietary communication layer for AI agent systems. Learn what it solves, where it fits, and how it deploys.",
};

const CAPABILITIES = [
    {
        title: "Proprietary Communication Layer",
        description:
            "TUP is a purpose-built protocol for structured agent-to-agent communication. It replaces general-purpose transport with a dedicated layer designed specifically for AI workloads — delivering consistent performance where generic approaches fall short.",
    },
    {
        title: "Consistent Agent Coordination",
        description:
            "Every message sent through TUP is verified for structural consistency before delivery. Your agents receive exactly what was intended — no drift, no corruption, no silent failures. If something goes wrong, TUP detects it immediately.",
    },
    {
        title: "Built for Controlled Environments",
        description:
            "TUP is designed to operate within your infrastructure. Deploy it on-premise, in a private cloud, or in an isolated evaluation environment. You maintain full control over where your data flows and how your agents communicate.",
    },
    {
        title: "Model-Agnostic by Design",
        description:
            "TUP works with any AI model that can produce or consume numerical representations. No custom adapters. No framework-specific configurations. Connect your existing models and start communicating reliably.",
    },
    {
        title: "Operational Telemetry",
        description:
            "Built-in monitoring provides real-time visibility into communication latency, throughput, and system health. Integrate with your existing observability stack — Prometheus, Grafana, or enterprise monitoring solutions.",
    },
    {
        title: "Enterprise Support & Lifecycle",
        description:
            "Every license includes deployment documentation, integration guidance, and access to our engineering team. We provide ongoing updates, security patches, and operational support throughout your license term.",
    },
];

export default function ProductPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Header */}
                <section className="pt-32 pb-16 px-6">
                    <div className="container-narrow text-center">
                        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
                            Product Overview
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            What TUP Does for Your Infrastructure
                        </h1>
                        <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
                            TUP is a proprietary communication protocol purpose-built for
                            multi-agent AI systems. It ensures that your agents communicate
                            reliably, consistently, and securely — at production speed.
                        </p>
                    </div>
                </section>

                {/* Capabilities */}
                <section className="pb-24 px-6">
                    <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-6">
                        {CAPABILITIES.map((cap) => (
                            <div key={cap.title} className="glass-card p-8">
                                <h3 className="text-lg font-bold">{cap.title}</h3>
                                <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    {cap.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Compatibility */}
                <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
                    <div className="container-narrow px-6">
                        <div className="glass-card p-10 md:p-12 text-center max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                Designed for Demanding Integration Scenarios
                            </h2>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                TUP is compatible with a broad range of AI frameworks and
                                deployment topologies. Whether you run tens or hundreds of
                                concurrent agents, across distributed or co-located
                                environments, TUP maintains the same level of reliability and
                                operational control.
                            </p>
                            <p className="mt-4 text-sm text-[var(--color-text-muted)] italic">
                                Specific compatibility details available during the evaluation process.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding text-center">
                    <div className="container-narrow px-6">
                        <h2 className="text-3xl font-bold">
                            Want to see how TUP fits your stack?
                        </h2>
                        <p className="mt-3 text-[var(--color-text-secondary)]">
                            Our team can walk you through how TUP integrates with your
                            current infrastructure — with no commitments.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact" className="btn-primary">
                                Request Evaluation →
                            </Link>
                            <Link href="/deployment" className="btn-secondary">
                                See Engagement Model
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
