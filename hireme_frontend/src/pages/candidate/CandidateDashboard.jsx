import { useState } from "react";

const stats = [
  { label: "Applied Jobs", value: 14, icon: "📋", color: "#4f46e5" },
  { label: "Interviews", value: 5, icon: "🗓️", color: "#0891b2" },
  { label: "Saved Jobs", value: 23, icon: "🔖", color: "#059669" },
  { label: "Profile Views", value: 128, icon: "👁️", color: "#d97706" },
];

const recentApps = [
  { company: "Google", role: "Frontend Developer", logo: "G", status: "Interview", date: "Mar 10", color: "#4285F4" },
  { company: "Stripe", role: "React Engineer", logo: "S", status: "Applied", date: "Mar 8", color: "#635BFF" },
  { company: "Notion", role: "UI Engineer", logo: "N", status: "Rejected", date: "Mar 5", color: "#000" },
  { company: "Figma", role: "Frontend Dev", logo: "F", status: "Shortlisted", date: "Mar 3", color: "#F24E1E" },
];

const statusStyle = {
  Interview: { bg: "#dcfce7", color: "#16a34a" },
  Applied: { bg: "#dbeafe", color: "#1d4ed8" },
  Rejected: { bg: "#fee2e2", color: "#dc2626" },
  Shortlisted: { bg: "#fef9c3", color: "#ca8a04" },
};

const suggestedJobs = [
  { company: "Airbnb", role: "Sr. Frontend Engineer", salary: "$120k–$160k", location: "Remote", logo: "A", color: "#FF5A5F" },
  { company: "Spotify", role: "React Developer", salary: "$100k–$130k", location: "New York", logo: "S", color: "#1DB954" },
  { company: "Slack", role: "UI/UX Engineer", salary: "$110k–$145k", location: "San Francisco", logo: "S", color: "#4A154B" },
];

export default function CandidateDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "🏠" },
    { id: "jobs", label: "Browse Jobs", icon: "🔍" },
    { id: "applications", label: "My Applications", icon: "📋" },
    { id: "saved", label: "Saved Jobs", icon: "🔖" },
    { id: "profile", label: "Profile", icon: "👤" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "'Outfit', sans-serif", background: "#f8fafc" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .nav-item:hover { background: #ede9fe !important; color: #4f46e5 !important; }
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.10) !important; }
        .btn-primary:hover { background: #4338ca !important; }
        .job-card:hover { border-color: #4f46e5 !important; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-thumb { background: #c7d2fe; border-radius: 10px; }
      `}</style>

      {/* Sidebar */}
      <aside style={{ width: 240, background: "#fff", borderRight: "1px solid #e2e8f0", display: "flex", flexDirection: "column", padding: "24px 0", position: "sticky", top: 0, height: "100vh" }}>
        <div style={{ padding: "0 20px 28px", borderBottom: "1px solid #f1f5f9" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#4f46e5" }}>Hire<span style={{ color: "#0f172a" }}>Me</span></div>
          <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>Candidate Portal</div>
        </div>

        <nav style={{ padding: "16px 12px", flex: 1 }}>
          {navItems.map(item => (
            <button key={item.id} className="nav-item"
              onClick={() => setActiveNav(item.id)}
              style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%",
                padding: "10px 12px", borderRadius: 10, border: "none", cursor: "pointer",
                marginBottom: 4, fontSize: 14, fontWeight: 500, transition: "all 0.15s",
                background: activeNav === item.id ? "#ede9fe" : "transparent",
                color: activeNav === item.id ? "#4f46e5" : "#64748b",
                fontFamily: "inherit"
              }}>
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: "16px 20px", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>A</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>Alex Johnson</div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>Frontend Dev</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "32px 36px", overflowY: "auto" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0f172a" }}>Good morning, Alex 👋</h1>
            <p style={{ color: "#64748b", marginTop: 4, fontSize: 14 }}>Here's what's happening with your job search</p>
          </div>
          <button className="btn-primary" style={{
            background: "#4f46e5", color: "#fff", border: "none", padding: "10px 20px",
            borderRadius: 10, fontWeight: 600, fontSize: 14, cursor: "pointer",
            fontFamily: "inherit", transition: "background 0.15s"
          }}>+ Update Resume</button>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
          {stats.map((s, i) => (
            <div key={i} className="card-hover" style={{
              background: "#fff", borderRadius: 14, padding: "20px 22px",
              boxShadow: "0 1px 6px rgba(0,0,0,0.06)", transition: "all 0.2s", cursor: "default"
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontSize: 30, fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 24 }}>
          {/* Recent Applications */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Recent Applications</h2>
              <a href="#" style={{ fontSize: 13, color: "#4f46e5", textDecoration: "none", fontWeight: 500 }}>View all →</a>
            </div>
            {recentApps.map((app, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 0", borderBottom: i < recentApps.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: app.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 16, flexShrink: 0 }}>{app.logo}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{app.role}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8" }}>{app.company} · {app.date}</div>
                </div>
                <span style={{ padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, background: statusStyle[app.status].bg, color: statusStyle[app.status].color }}>{app.status}</span>
              </div>
            ))}
          </div>

          {/* Profile Completion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", borderRadius: 16, padding: 24, color: "#fff" }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>Profile Strength</div>
              <div style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>78%</div>
              <div style={{ background: "rgba(255,255,255,0.25)", borderRadius: 10, height: 8, marginBottom: 12 }}>
                <div style={{ background: "#fff", borderRadius: 10, height: 8, width: "78%" }}></div>
              </div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>Add portfolio link to reach 90%</div>
            </div>

            <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", flex: 1 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 14 }}>Upcoming Interviews</h3>
              {[{ company: "Google", time: "Tomorrow, 2:00 PM", type: "Video Call" }, { company: "Stripe", time: "Mar 15, 10:30 AM", type: "Phone Screen" }].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, marginBottom: i === 0 ? 12 : 0 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4f46e5", marginTop: 5, flexShrink: 0 }}></div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{item.company} — {item.type}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8" }}>{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Suggested Jobs */}
        <div style={{ marginTop: 24, background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Recommended for You</h2>
            <a href="#" style={{ fontSize: 13, color: "#4f46e5", textDecoration: "none", fontWeight: 500 }}>View all →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
            {suggestedJobs.map((job, i) => (
              <div key={i} className="job-card" style={{ border: "1.5px solid #e2e8f0", borderRadius: 12, padding: 16, cursor: "pointer", transition: "all 0.15s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 8, background: job.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800 }}>{job.logo}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{job.company}</div>
                    <div style={{ fontSize: 11, color: "#94a3b8" }}>{job.location}</div>
                  </div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1e293b", marginBottom: 8 }}>{job.role}</div>
                <div style={{ fontSize: 13, color: "#059669", fontWeight: 600 }}>{job.salary}</div>
                <button style={{ marginTop: 12, width: "100%", padding: "8px 0", background: "#ede9fe", color: "#4f46e5", border: "none", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}