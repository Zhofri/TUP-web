import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Use Cases — TUP Enterprise",
    description:
        "See how organizations use TUP for multi-agent coordination, distributed AI operations, and autonomous system communication.",
};

const USE_CASES = [
    {
        icon: "🤖",
        title: "Multi-Agent Coordination",
        context:
            "Organizations deploying multiple specialized AI agents need them to exchange information reliably — without building custom integrations between every pair.",
        need:
            "A communication layer that works across any model, verifies every message, and scales with the fleet.",
        value:
            "TUP provides consistent, verified agent-to-agent communication with no custom adapters, no model-specific configurations, and no silent failures.",
        result:
            "Teams deploy more agents faster, with confidence that communication remains reliable as the system grows.",
        industries: ["AI Platforms", "Enterprise Operations", "Research Labs"],
    },
    {
        icon: "🧠",
        title: "Distributed AI Operations",
        context:
            "Large-scale AI workloads often span multiple models, machines, and stages. Intermediate results need to move between components without corruption or delay.",
        need:
            "Fast, reliable handoff between processing stages — with verification that nothing was lost in transit.",
        value:
            "TUP delivers sub-millisecond communication with full message consistency, enabling high-speed pipelines across heterogeneous infrastructure.",
        result:
            "Reduced operational risk, faster pipeline throughput, and confidence in the integrity of every intermediate result.",
        industries: ["Cloud AI Services", "Inference Providers", "MLOps"],
    },
    {
        icon: "🚗",
        title: "Autonomous System Communication",
        context:
            "Autonomous vehicles, drones, and robotic systems require communication that is fast, reliable, and resistant to interference.",
        need:
            "A protocol that operates at latencies measured in fractions of a millisecond, with built-in fault detection.",
        value:
            "TUP's architecture eliminates common failure modes in real-time AI communication, providing consistent performance in demanding operational conditions.",
        result:
            "Higher operational confidence, reduced incident rates, and a communication layer that matches the speed requirements of autonomous decision-making.",
        industries: ["Autonomous Vehicles", "Robotics", "Defense & Aerospace"],
    },
    {
        icon: "🐝",
        title: "Fleet-Scale Agent Management",
        context:
            "Managing dozens or hundreds of agents that need to share objectives, synchronize state, and coordinate actions — without a central bottleneck.",
        need:
            "Communication infrastructure that supports multiple topologies and scales linearly with agent count.",
        value:
            "TUP supports both peer-to-peer and hub-spoke coordination models, maintaining message consistency and operational visibility across the entire fleet.",
        result:
            "Teams operate larger agent fleets with fewer coordination failures and full visibility into system behavior.",
        industries: ["IoT Platforms", "Logistics", "Smart Infrastructure"],
    },
];

export default function UseCasesPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Header */}
                <section className="pt-32 pb-16 px-6">
                    <div className="container-narrow text-center">
                        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
                            Applications
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            Where TUP Operates
                        </h1>
                        <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
                            TUP is communication infrastructure for teams that need
                            reliable, verifiable agent coordination in production environments.
                        </p>
                    </div>
                </section>

                {/* Cases */}
                <section className="pb-24 px-6">
                    <div className="container-narrow space-y-8">
                        {USE_CASES.map((uc) => (
                            <div key={uc.title} className="glass-card p-8 md:p-10">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="text-3xl">{uc.icon}</div>
                                    <div>
                                        <h2 className="text-xl font-bold">{uc.title}</h2>
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {uc.industries.map((ind) => (
                                                <span
                                                    key={ind}
                                                    className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-[var(--color-border-accent)] text-[var(--color-text-muted)] uppercase tracking-wider"
                                                >
                                                    {ind}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-2">
                                            Context
                                        </h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {uc.context}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-muted)] mb-2">
                                            Need
                                        </h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {uc.need}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
                                            What TUP Provides
                                        </h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {uc.value}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-2">
                                            Expected Result
                                        </h4>
                                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                            {uc.result}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding text-center" style={{ background: "var(--color-bg-secondary)" }}>
                    <div className="container-narrow px-6">
                        <h2 className="text-3xl font-bold">
                            Have a different use case in mind?
                        </h2>
                        <p className="mt-3 text-[var(--color-text-secondary)]">
                            TUP is protocol-level infrastructure. If your system involves
                            AI agents communicating, our team can evaluate the fit.
                        </p>
                        <Link href="/contact" className="btn-primary mt-8 inline-flex">
                            Describe Your Project →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
