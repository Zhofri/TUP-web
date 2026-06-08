import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

/* ═══════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative container-narrow px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-accent)] mb-8" style={{ background: "rgba(6,182,212,0.04)" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
          <span className="text-xs font-medium text-[var(--color-text-secondary)]">
            Enterprise Edition — Now Available
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight max-w-4xl mx-auto">
          Reliable Communication Infrastructure for{" "}
          <span className="text-gradient">AI Agent Systems</span>
        </h1>

        {/* Subline */}
        <p className="animate-fade-in-up animation-delay-200 mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
          A proprietary communication layer that ensures your AI agents
          exchange information consistently, securely, and at production speed.
          Ready to install. Ready to deploy.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base">
            Talk to Sales →
          </Link>
          <Link href="/product" className="btn-secondary text-base">
            Product Overview
          </Link>
        </div>

        {/* Stats Row */}
        <div className="animate-fade-in-up animation-delay-400 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: "< 1 ms", label: "Communication Latency" },
            { value: "100%", label: "Message Consistency" },
            { value: "Zero", label: "External Attack Surface" },
            { value: "Any", label: "Model Compatible" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--color-text-muted)] mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   WHO TUP IS FOR
   ═══════════════════════════════════════════ */
function Audience() {
  const profiles = [
    {
      icon: "🏢",
      title: "Engineering Teams",
      description:
        "Running multi-agent AI systems in production and needing reliable, consistent communication between agents.",
    },
    {
      icon: "🔧",
      title: "Infrastructure Leaders",
      description:
        "Building or scaling AI platforms that require enterprise-grade messaging with auditability and control.",
    },
    {
      icon: "🛡️",
      title: "Security-Conscious Organizations",
      description:
        "Operating in environments where data integrity, controlled deployment, and operational governance are non-negotiable.",
    },
  ];

  return (
    <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="container-narrow px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Built For
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Who TUP is For
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto">
            TUP is designed for organizations that treat AI communication as
            critical infrastructure — not an afterthought.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <div key={p.title} className="glass-card p-7 text-center">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   OPERATIONAL BENEFITS
   ═══════════════════════════════════════════ */
const BENEFITS = [
  {
    category: "Operational Performance",
    items: [
      {
        title: "Consistent Low-Latency Communication",
        description:
          "Agent-to-agent messages are delivered in under one millisecond, enabling real-time coordination without bottlenecks.",
      },
      {
        title: "Scales With Your Fleet",
        description:
          "Designed to support growing numbers of concurrent agents without degradation in reliability or speed.",
      },
    ],
  },
  {
    category: "Reliability & Integrity",
    items: [
      {
        title: "Message Consistency Guarantee",
        description:
          "Every message sent through TUP arrives exactly as intended. The protocol verifies structural consistency on both ends automatically.",
      },
      {
        title: "Fault Detection & Recovery",
        description:
          "Communication failures are detected immediately. Configurable recovery modes ensure your system responds according to your operational policy.",
      },
    ],
  },
  {
    category: "Enterprise Readiness",
    items: [
      {
        title: "Controlled Deployment",
        description:
          "Install on-premise, in a private cloud, or in an isolated environment. You control where your infrastructure lives.",
      },
      {
        title: "Full Operational Telemetry",
        description:
          "Built-in monitoring for latency, throughput, and system health — ready for integration with your existing observability stack.",
      },
    ],
  },
];

function Benefits() {
  return (
    <section className="section-padding">
      <div className="container-narrow px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Why TUP
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What TUP Does for Your Operations
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto">
            We focus on three things that matter most when AI communication
            is part of your production infrastructure.
          </p>
        </div>

        <div className="space-y-10">
          {BENEFITS.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-5">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((item) => (
                  <div key={item.title} className="glass-card p-7">
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   EVIDENCE (SAFE — NO INTERNALS)
   ═══════════════════════════════════════════ */
function Evidence() {
  return (
    <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="container-narrow px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Validated
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Proven in Controlled Environments
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto">
            TUP has been rigorously evaluated across multiple dimensions
            before being released for enterprise adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { label: "Sub-millisecond latency", detail: "Evaluated in controlled internal environments" },
            { label: "Full message consistency", detail: "Verified across heterogeneous model pairs" },
            { label: "Fault recovery under load", detail: "Tested in multi-agent stress scenarios" },
            { label: "Model-agnostic operation", detail: "Validated with diverse AI frameworks" },
          ].map((e) => (
            <div key={e.label} className="glass-card p-6 text-center">
              <div className="text-sm font-semibold text-[var(--color-text-primary)]">
                {e.label}
              </div>
              <p className="mt-2 text-xs text-[var(--color-text-muted)] leading-relaxed">
                {e.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[var(--color-text-muted)] mt-8 italic">
          Detailed validation reports available under NDA upon request.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   WHAT CLIENTS RECEIVE
   ═══════════════════════════════════════════ */
function Deliverables() {
  const items = [
    {
      icon: "📦",
      title: "Compiled Binary Distribution",
      description: "Production-ready protocol package, optimized and ready for installation in your environment.",
    },
    {
      icon: "📘",
      title: "Integration & Deployment Guide",
      description: "Step-by-step documentation for deployment, configuration, and initial integration with your systems.",
    },
    {
      icon: "🛠️",
      title: "Technical Support",
      description: "Access to our engineering team according to your service tier — from email support to dedicated account management.",
    },
    {
      icon: "🔄",
      title: "Updates & Security Patches",
      description: "Ongoing access to protocol updates, performance improvements, and security patches throughout your license term.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-narrow px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Deliverables
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Clients Receive
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Every TUP license includes everything your team needs to deploy,
            operate, and maintain the protocol in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item) => (
            <div key={item.title} className="glass-card p-7">
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   LICENSING TIERS
   ═══════════════════════════════════════════ */
const TIERS = [
  {
    name: "Starter Evaluation",
    description: "For teams exploring TUP for their environment",
    features: [
      "Compiled binary distribution",
      "Integration documentation",
      "Email support",
      "Knowledge base access",
      "Single-environment license",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
  {
    name: "Business Integration",
    description: "For teams deploying TUP in production",
    features: [
      "Everything in Starter",
      "Priority support (8h SLA)",
      "Dedicated communication channel",
      "Quarterly operational reviews",
      "Multi-environment license",
    ],
    cta: "Request Evaluation",
    highlight: true,
  },
  {
    name: "Enterprise License",
    description: "For mission-critical AI infrastructure",
    features: [
      "Everything in Business",
      "24/7 incident response (1h SLA)",
      "Dedicated Technical Account Manager",
      "Custom deployment configurations",
      "On-premise installation support",
      "Architecture consulting",
    ],
    cta: "Talk to Engineering",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="container-narrow px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
            Licensing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Choose Your Integration Level
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Every deployment is unique. We work with your team to define the
            scope, support, and licensing that fits your infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="glass-card p-8 flex flex-col"
              style={
                tier.highlight
                  ? {
                    borderColor: "var(--color-accent-soft)",
                    boxShadow: "0 0 40px rgba(6,182,212,0.06)",
                  }
                  : {}
              }
            >
              {tier.highlight && (
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mt-2">
                {tier.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="text-[var(--color-accent)] mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 text-center text-sm ${tier.highlight ? "btn-primary" : "btn-secondary"
                  }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-narrow px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
          Ready to evaluate TUP for your infrastructure?
        </h2>
        <p className="mt-4 text-[var(--color-text-secondary)] max-w-lg mx-auto">
          Our team will walk you through a controlled evaluation process
          tailored to your environment — no commitments, no pressure.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="btn-primary text-base">
            Request Evaluation →
          </Link>
          <Link href="/deployment" className="btn-secondary text-base">
            See Engagement Model
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   HOME PAGE ASSEMBLY
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Audience />
        <Benefits />
        <Evidence />
        <Deliverables />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
