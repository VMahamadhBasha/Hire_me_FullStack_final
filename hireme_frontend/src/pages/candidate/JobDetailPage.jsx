import { useState } from "react";

const job = {
  company: "Google",
  role: "Senior Frontend Engineer",
  location: "Mountain View, CA",
  salary: "$140k – $180k/year",
  type: "Full-time",
  remote: true,
  logo: "G",
  color: "#4285F4",
  posted: "2 days ago",
  applicants: 142,
  deadline: "March 30, 2026",
  experience: "5+ years",
  department: "Engineering",
  about: "Google's mission is to organize the world's information and make it universally accessible and useful. As a Senior Frontend Engineer, you'll work on products used by billions of people worldwide. You'll collaborate with world-class designers, product managers, and engineers to build exceptional web experiences.",
  responsibilities: [
    "Lead the architecture and development of scalable frontend systems",
    "Collaborate cross-functionally with design, product, and backend teams",
    "Mentor junior engineers and conduct thorough code reviews",
    "Drive performance optimizations and accessibility improvements",
    "Participate in technical design discussions and decision-making",
    "Write clean, maintainable, and well-tested code",
  ],
  requirements: [
    "5+ years of professional frontend development experience",
    "Deep expertise in React, TypeScript, and modern JavaScript",
    "Experience with GraphQL and RESTful APIs",
    "Strong understanding of web performance and accessibility",
    "Track record of shipping production-grade features at scale",
    "Excellent communication and collaboration skills",
  ],
  benefits: ["Health, dental & vision insurance", "401(k) with 6% match", "Flexible PTO", "Remote work stipend", "Learning & development budget", "Stock options (RSUs)"],
};

const similarJobs = [
  { company: "Meta", role: "Frontend Engineer", salary: "$135k–$175k", logo: "M", color: "#1877F2" },
  { company: "Apple", role: "Sr. UI Engineer", salary: "$145k–$185k", logo: "A", color: "#555" },
  { company: "Microsoft", role: "Software Engineer II", salary: "$120k–$160k", logo: "M", color: "#00A4EF" },
];

export default function JobDetailPage() {
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .back-btn:hover { color: #4f46e5 !important; }
        .apply-btn:hover { background: #4338ca !important; transform: translateY(-1px); box-shadow: 0 6px 16px rgba(79,70,229,0.3) !important; }
        li { margin-bottom: 8px; color: #475569; font-size: 14.5px; line-height: 1.6; }
      `}</style>

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#4f46e5" }}>Hire<span style={{ color: "#0f172a" }}>Me</span></div>
        <button className="back-btn" style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#64748b", fontFamily: "inherit", fontWeight: 500, transition: "color 0.15s" }}>← Back to Jobs</button>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>A</div>
      </header>

      <div style={{ padding: "36px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 28 }}>

          {/* Main Content */}
          <div>
            {/* Job Header Card */}
            <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", marginBottom: 20 }}>
              <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{ width: 64, height: 64, borderRadius: 16, background: job.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 28, flexShrink: 0 }}>{job.logo}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <h1 style={{ fontSize: 22, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>{job.role}</h1>
                      <p style={{ fontSize: 15, color: "#4f46e5", fontWeight: 600 }}>{job.company}</p>
                    </div>
                    <button onClick={() => setSaved(!saved)} style={{ background: saved ? "#ede9fe" : "#f8fafc", border: "1.5px solid #e2e8f0", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 14, fontFamily: "inherit", fontWeight: 600, color: saved ? "#4f46e5" : "#64748b" }}>
                      {saved ? "🔖 Saved" : "🤍 Save Job"}
                    </button>
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 16 }}>
                    {[
                      { icon: "📍", text: job.location },
                      { icon: "💰", text: job.salary },
                      { icon: "⏱️", text: job.type },
                      { icon: "🌐", text: "Remote OK" },
                      { icon: "🎓", text: job.experience },
                      { icon: "👥", text: `${job.applicants} applicants` },
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#64748b" }}>
                        <span>{item.icon}</span> {item.text}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                    {["React", "TypeScript", "GraphQL", "Node.js"].map(tag => (
                      <span key={tag} style={{ background: "#ede9fe", color: "#4f46e5", padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", marginBottom: 20 }}>
              <h2 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 14 }}>About the Role</h2>
              <p style={{ fontSize: 14.5, color: "#475569", lineHeight: 1.8 }}>{job.about}</p>
            </div>

            {/* Responsibilities */}
            <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", marginBottom: 20 }}>
              <h2 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 14 }}>Responsibilities</h2>
              <ul style={{ paddingLeft: 20 }}>
                {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>

            {/* Requirements */}
            <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", marginBottom: 20 }}>
              <h2 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 14 }}>Requirements</h2>
              <ul style={{ paddingLeft: 20 }}>
                {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </div>

            {/* Benefits */}
            <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 14 }}>Benefits & Perks</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                {job.benefits.map((b, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#475569" }}>
                    <span style={{ color: "#4f46e5", fontSize: 16 }}>✓</span> {b}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Apply Card */}
            <div style={{ background: "#fff", borderRadius: 18, padding: 24, boxShadow: "0 1px 6px rgba(0,0,0,0.06)", marginBottom: 20, position: "sticky", top: 80 }}>
              <div style={{ background: "linear-gradient(135deg, #f0f9ff, #ede9fe)", borderRadius: 12, padding: 16, marginBottom: 20, textAlign: "center" }}>
                <div style={{ fontSize: 13, color: "#64748b", marginBottom: 2 }}>Salary Range</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#0f172a" }}>{job.salary}</div>
              </div>

              {applied ? (
                <div style={{ background: "#dcfce7", borderRadius: 12, padding: 16, textAlign: "center" }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>🎉</div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#16a34a" }}>Application Sent!</div>
                  <div style={{ fontSize: 12, color: "#4ade80", marginTop: 4 }}>We'll notify you of updates</div>
                </div>
              ) : (
                <button className="apply-btn" onClick={() => setApplied(true)} style={{
                  width: "100%", padding: "14px", background: "#4f46e5", color: "#fff", border: "none",
                  borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit",
                  transition: "all 0.2s", boxShadow: "0 4px 12px rgba(79,70,229,0.25)"
                }}>Apply Now</button>
              )}

              <div style={{ marginTop: 16 }}>
                {[["📅", "Posted", job.posted], ["⏰", "Deadline", job.deadline], ["🏢", "Department", job.department], ["👥", "Applicants", job.applicants]].map(([icon, label, val], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 3 ? "1px solid #f1f5f9" : "none" }}>
                    <span style={{ fontSize: 13, color: "#94a3b8" }}>{icon} {label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar Jobs */}
            <div style={{ background: "#fff", borderRadius: 18, padding: 24, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Similar Jobs</h3>
              {similarJobs.map((j, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: i < similarJobs.length - 1 ? "1px solid #f1f5f9" : "none", cursor: "pointer" }}>
                  <div style={{ width: 38, height: 38, borderRadius: 8, background: j.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>{j.logo}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>{j.role}</div>
                    <div style={{ fontSize: 12, color: "#94a3b8" }}>{j.company}</div>
                  </div>
                  <div style={{ fontSize: 12, color: "#059669", fontWeight: 600 }}>{j.salary.split("–")[0]}+</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}