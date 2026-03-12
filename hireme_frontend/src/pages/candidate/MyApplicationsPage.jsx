import { useState } from "react";

const applications = [
  { id: 1, company: "Google", role: "Senior Frontend Engineer", location: "Mountain View, CA", salary: "$140k–$180k", logo: "G", color: "#4285F4", status: "Interview", appliedDate: "Mar 10, 2026", stage: 3, totalStages: 4, stages: ["Applied", "Screening", "Interview", "Offer"], interviewer: "Sarah Chen", interviewDate: "Mar 18, 2026, 2:00 PM" },
  { id: 2, company: "Stripe", role: "React Engineer", location: "San Francisco, CA", salary: "$120k–$155k", logo: "S", color: "#635BFF", status: "Screening", appliedDate: "Mar 8, 2026", stage: 2, totalStages: 4, stages: ["Applied", "Screening", "Technical", "Offer"], interviewer: "James Park", interviewDate: "Mar 14, 2026, 10:30 AM" },
  { id: 3, company: "Airbnb", role: "UI/UX Engineer", location: "Remote", salary: "$110k–$145k", logo: "A", color: "#FF5A5F", status: "Applied", appliedDate: "Mar 5, 2026", stage: 1, totalStages: 4, stages: ["Applied", "Screening", "Design Review", "Offer"] },
  { id: 4, company: "Notion", role: "Product Engineer", location: "San Francisco, CA", salary: "$130k–$160k", logo: "N", color: "#000", status: "Rejected", appliedDate: "Feb 28, 2026", stage: 2, totalStages: 4, stages: ["Applied", "Screening", "Technical", "Offer"] },
  { id: 5, company: "Figma", role: "Software Engineer", location: "Remote", salary: "$125k–$165k", logo: "F", color: "#F24E1E", status: "Shortlisted", appliedDate: "Feb 22, 2026", stage: 2, totalStages: 4, stages: ["Applied", "Shortlisted", "Interview", "Offer"] },
  { id: 6, company: "Vercel", role: "Developer Advocate", location: "Remote", salary: "$90k–$120k", logo: "V", color: "#000", status: "Applied", appliedDate: "Feb 18, 2026", stage: 1, totalStages: 4, stages: ["Applied", "Screening", "Interview", "Offer"] },
];

const statusConfig = {
  Interview: { bg: "#dcfce7", color: "#16a34a", icon: "🗓️" },
  Screening: { bg: "#dbeafe", color: "#1d4ed8", icon: "📋" },
  Applied: { bg: "#f1f5f9", color: "#475569", icon: "📤" },
  Rejected: { bg: "#fee2e2", color: "#dc2626", icon: "❌" },
  Shortlisted: { bg: "#fef9c3", color: "#ca8a04", icon: "⭐" },
  Offer: { bg: "#d1fae5", color: "#065f46", icon: "🎉" },
};

export default function MyApplicationsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const tabs = ["All", "Active", "Interview", "Rejected"];

  const filtered = applications.filter(app => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Active") return !["Rejected"].includes(app.status);
    return app.status === activeFilter;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .app-card:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.08) !important; }
        .stage-dot { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; flex-shrink: 0; }
        .stage-line { flex: 1; height: 2px; margin: 0 4px; }
      `}</style>

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#4f46e5" }}>Hire<span style={{ color: "#0f172a" }}>Me</span></div>
        <div style={{ display: "flex", gap: 8 }}>
          {["Dashboard", "Browse Jobs", "My Applications", "Saved"].map((nav, i) => (
            <button key={i} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: nav === "My Applications" ? "#ede9fe" : "transparent", color: nav === "My Applications" ? "#4f46e5" : "#64748b", fontFamily: "inherit", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>{nav}</button>
          ))}
        </div>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>A</div>
      </header>

      <div style={{ padding: "36px 40px", maxWidth: 900, margin: "0 auto" }}>
        {/* Page Title */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0f172a" }}>My Applications</h1>
          <p style={{ color: "#64748b", marginTop: 4, fontSize: 14 }}>Track the status of your job applications</p>
        </div>

        {/* Summary Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12, marginBottom: 28 }}>
          {[
            { label: "Total", count: applications.length, color: "#4f46e5" },
            { label: "Active", count: applications.filter(a => a.status !== "Rejected").length, color: "#0891b2" },
            { label: "Interviews", count: applications.filter(a => a.status === "Interview").length, color: "#16a34a" },
            { label: "Shortlisted", count: applications.filter(a => a.status === "Shortlisted").length, color: "#ca8a04" },
            { label: "Rejected", count: applications.filter(a => a.status === "Rejected").length, color: "#dc2626" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: s.color }}>{s.count}</div>
              <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20, background: "#fff", padding: "6px", borderRadius: 12, border: "1px solid #e2e8f0", width: "fit-content" }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveFilter(tab)} style={{
              padding: "7px 18px", borderRadius: 8, border: "none", cursor: "pointer",
              fontFamily: "inherit", fontSize: 13, fontWeight: 600, transition: "all 0.15s",
              background: activeFilter === tab ? "#4f46e5" : "transparent",
              color: activeFilter === tab ? "#fff" : "#64748b"
            }}>{tab}</button>
          ))}
        </div>

        {/* Application Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {filtered.map(app => {
            const isExpanded = expandedId === app.id;
            const sc = statusConfig[app.status];
            return (
              <div key={app.id} className="app-card" style={{ background: "#fff", borderRadius: 16, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", overflow: "hidden", transition: "all 0.2s" }}>
                {/* Main Row */}
                <div style={{ padding: "20px 22px", display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }} onClick={() => setExpandedId(isExpanded ? null : app.id)}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: app.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 20, flexShrink: 0 }}>{app.logo}</div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 2 }}>{app.role}</h3>
                        <p style={{ fontSize: 13, color: "#64748b" }}>{app.company} · {app.location}</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, background: sc.bg, color: sc.color }}>
                          {sc.icon} {app.status}
                        </span>
                        <span style={{ fontSize: 18, color: "#94a3b8" }}>{isExpanded ? "▲" : "▼"}</span>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 16, marginTop: 10, alignItems: "center" }}>
                      {/* Progress Bar */}
                      <div style={{ display: "flex", alignItems: "center", gap: 0, flex: 1 }}>
                        {app.stages.map((stage, idx) => {
                          const isDone = idx < app.stage;
                          const isCurrent = idx === app.stage - 1;
                          return (
                            <div key={idx} style={{ display: "flex", alignItems: "center", flex: idx < app.stages.length - 1 ? 1 : 0 }}>
                              <div className="stage-dot" title={stage} style={{ background: isDone ? (app.status === "Rejected" && isCurrent ? "#fee2e2" : "#4f46e5") : "#e2e8f0", color: isDone ? (app.status === "Rejected" && isCurrent ? "#dc2626" : "#fff") : "#94a3b8", border: isCurrent ? `2px solid ${app.status === "Rejected" ? "#dc2626" : "#4f46e5"}` : "none" }}>
                                {isDone ? (app.status === "Rejected" && isCurrent ? "✕" : "✓") : idx + 1}
                              </div>
                              {idx < app.stages.length - 1 && (
                                <div className="stage-line" style={{ background: idx < app.stage - 1 ? "#4f46e5" : "#e2e8f0" }}></div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                      <span style={{ fontSize: 12, color: "#94a3b8", flexShrink: 0 }}>Applied {app.appliedDate}</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div style={{ padding: "0 22px 20px", borderTop: "1px solid #f1f5f9" }}>
                    <div style={{ paddingTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div style={{ background: "#f8fafc", borderRadius: 12, padding: 14 }}>
                        <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 4 }}>💰 Salary</div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#059669" }}>{app.salary}</div>
                      </div>
                      {app.interviewDate && (
                        <div style={{ background: "#f0fdf4", borderRadius: 12, padding: 14 }}>
                          <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 4 }}>🗓️ Next Interview</div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "#16a34a" }}>{app.interviewDate}</div>
                          {app.interviewer && <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>with {app.interviewer}</div>}
                        </div>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                      <button style={{ padding: "9px 18px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: 9, fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>View Job</button>
                      <button style={{ padding: "9px 18px", background: "#f1f5f9", color: "#475569", border: "none", borderRadius: 9, fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>Withdraw Application</button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}