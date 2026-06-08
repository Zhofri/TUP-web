import { getLeads, Lead } from "./actions";
import { redirect } from "next/navigation";

function getTierBadge(tier?: string) {
    if (tier === "HOT") return <span className="px-2 py-1 bg-red-900/40 text-red-400 border border-red-800/50 rounded-md text-xs font-bold tracking-wider">HOT</span>;
    if (tier === "WARM") return <span className="px-2 py-1 bg-orange-900/40 text-orange-400 border border-orange-800/50 rounded-md text-xs font-bold tracking-wider">WARM</span>;
    return <span className="px-2 py-1 bg-gray-800 text-gray-400 border border-gray-700 rounded-md text-xs font-bold tracking-wider">COLD</span>;
}

export default async function AdminLeadsPage({
    searchParams
}: {
    searchParams: { key?: string }
}) {
    // Simple protection for MVP
    if (searchParams.key !== "tup_admin_2026") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#050510] text-red-500 font-mono">
                ACCESS DENIED. Invalid admin key.
            </div>
        );
    }

    const leads = await getLeads();

    // Stats
    const total = leads.length;
    const hots = leads.filter(l => l.qualification?.tier === "HOT").length;
    const warms = leads.filter(l => l.qualification?.tier === "WARM").length;
    const colds = leads.filter(l => l.qualification?.tier === "COLD").length;

    return (
        <main className="min-h-screen bg-[#050510] text-[var(--color-text-primary)] p-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight">TUP Enterprise</h1>
                        <p className="text-[var(--color-text-secondary)] mt-1">Lead Qualification Dashboard</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="glass-card px-4 py-2 text-center rounded-lg">
                            <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider">Total</div>
                            <div className="text-xl font-bold">{total}</div>
                        </div>
                        <div className="glass-card px-4 py-2 text-center rounded-lg border-t-2 border-t-red-500">
                            <div className="text-xs text-red-400 uppercase tracking-wider">Hot</div>
                            <div className="text-xl font-bold text-red-400">{hots}</div>
                        </div>
                        <div className="glass-card px-4 py-2 text-center rounded-lg border-t-2 border-t-orange-500">
                            <div className="text-xs text-orange-400 uppercase tracking-wider">Warm</div>
                            <div className="text-xl font-bold text-orange-400">{warms}</div>
                        </div>
                        <div className="glass-card px-4 py-2 text-center rounded-lg border-t-2 border-t-gray-500">
                            <div className="text-xs text-gray-400 uppercase tracking-wider">Cold</div>
                            <div className="text-xl font-bold text-gray-400">{colds}</div>
                        </div>
                    </div>
                </div>

                <div className="glass-card overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black/40 border-b border-[var(--color-border-subtle)]">
                                <th className="p-4 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Priority</th>
                                <th className="p-4 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Prospect</th>
                                <th className="p-4 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Details</th>
                                <th className="p-4 text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">Score Breakdown</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--color-border-subtle)]">
                            {leads.map((lead, idx) => (
                                <tr key={idx} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="p-4 align-top">
                                        <div className="flex flex-col items-start gap-2">
                                            {getTierBadge(lead.qualification?.tier)}
                                            <span className="text-2xl font-black text-white/90">
                                                {lead.qualification?.score || 0}
                                            </span>
                                            <span className="text-xs text-[var(--color-text-muted)]">
                                                {new Date(lead.submittedAt).toLocaleDateString()}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="p-4 align-top">
                                        <div className="font-bold text-lg">{lead.name}</div>
                                        <div className="text-sm text-[var(--color-text-secondary)]">{lead.title}</div>
                                        <div className="mt-2 font-medium text-[var(--color-accent)]">{lead.company}</div>
                                        <div className="text-sm text-[var(--color-text-muted)] mt-1">{lead.email}</div>
                                    </td>
                                    <td className="p-4 align-top max-w-md">
                                        <div className="flex gap-2 mb-3">
                                            <span className="px-2 py-1 bg-[#1a1a2e] rounded text-xs text-[var(--color-text-secondary)]">
                                                {lead.useCase || "Unknown"}
                                            </span>
                                            <span className="px-2 py-1 bg-[#1a1a2e] rounded text-xs text-[var(--color-text-secondary)]">
                                                {lead.projectSize || "Unknown"}
                                            </span>
                                        </div>
                                        <p className="text-sm text-[var(--color-text-secondary)] italic border-l-2 border-[var(--color-border-subtle)] pl-3">
                                            &quot;{lead.message}&quot;
                                        </p>
                                    </td>
                                    <td className="p-4 align-top">
                                        <ul className="space-y-1 text-xs font-mono text-[var(--color-text-muted)]">
                                            {lead.qualification?.breakdown.map((item, i) => (
                                                <li key={i}>✓ {item}</li>
                                            ))}
                                            {(!lead.qualification?.breakdown || lead.qualification.breakdown.length === 0) && (
                                                <li>No scoring signals detected.</li>
                                            )}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                            {leads.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="p-12 text-center text-[var(--color-text-muted)]">
                                        No leads captured yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
