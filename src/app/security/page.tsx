import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security — TUP Enterprise",
    description:
        "TUP's security posture: integrity, controlled deployment, and operational governance for enterprise AI systems.",
};

const POSTURE = [
    {
        icon: "🛡️",
        title: "Structurally Secure by Design",
        description:
            "TUP does not rely on external security layers or runtime patches. Security is built into the protocol architecture from the ground up. Every message undergoes structural verification before delivery — there is no bypass, no override, and no exception.",
    },
    {
        icon: "🔐",
        title: "Message Integrity Assurance",
        description:
            "Every communication through TUP is verified for structural consistency. What was sent is exactly what is received — automatically and deterministically. If any inconsistency is detected, the protocol rejects the transmission immediately.",
    },
    {
        icon: "🚫",
        title: "Resistant to Adversarial Manipulation",
        description:
            "TUP's communication model does not process semantic content or natural language. There is no interpretive layer that can be exploited. Payloads that do not conform to the declared structural contract are rejected outright.",
    },
    {
        icon: "🧊",
        title: "Controlled, Auditable Operation",
        description:
            "Every transmission event can be logged with full operational metadata. This provides a verifiable audit trail suitable for compliance, post-incident analysis, and regulated environments.",
    },
    {
        icon: "🔄",
        title: "Fault Detection & Operational Recovery",
        description:
            "Communication failures are detected instantly. TUP supports configurable operational modes that determine how your system responds — from strict fail-fast policies to automated recovery with full telemetry.",
    },
    {
        icon: "🏢",
        title: "Enterprise Deployment Governance",
        description:
            "Deploy TUP within your own infrastructure with full control over access, network boundaries, and data flow. TUP operates entirely within your environment — no external calls, no cloud dependencies, no data leaving your perimeter.",
    },
];

export default function SecurityPage() {
    return (
        <>
            <Navbar />
            <main>
                {/* Header */}
                <section className="pt-32 pb-16 px-6">
                    <div className="container-narrow text-center">
                        <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
                            Security Posture
                        </p>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                            Protection Through Architecture
                        </h1>
                        <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl mx-auto text-lg">
                            TUP&apos;s security properties are not added features — they are
                            structural consequences of how the protocol was designed.
                            There is nothing to configure or enable.
                        </p>
                    </div>
                </section>

                {/* Posture Grid */}
                <section className="pb-24 px-6">
                    <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-6">
                        {POSTURE.map((p) => (
                            <div key={p.title} className="glass-card p-7">
                                <div className="text-2xl mb-3">{p.icon}</div>
                                <h3 className="text-lg font-bold">{p.title}</h3>
                                <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    {p.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Trust Statement */}
                <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
                    <div className="container-narrow px-6">
                        <div className="glass-card p-10 md:p-12 text-center max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold mb-4">
                                Designed for Environments That Demand Control
                            </h2>
                            <p className="text-[var(--color-text-secondary)] leading-relaxed">
                                TUP is used in environments where data integrity, operational
                                governance, and deployment control are non-negotiable.
                                Our protocol is evaluated in rigorous internal testing
                                environments before every release.
                            </p>
                            <p className="mt-4 text-sm text-[var(--color-text-muted)] italic">
                                Detailed security documentation is available under NDA during the evaluation process.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding text-center">
                    <div className="container-narrow px-6">
                        <h2 className="text-3xl font-bold">
                            Have security or compliance questions?
                        </h2>
                        <p className="mt-3 text-[var(--color-text-secondary)]">
                            Our team can provide detailed security documentation and answer
                            questions from your InfoSec or compliance team.
                        </p>
                        <Link href="/contact" className="btn-primary mt-8 inline-flex">
                            Contact Security Team →
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
