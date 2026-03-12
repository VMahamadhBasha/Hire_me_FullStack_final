import { useState } from "react";

const allJobs = [
  { id: 1, company: "Google", role: "Senior Frontend Engineer", location: "Mountain View, CA", salary: "$140k–$180k", type: "Full-time", remote: true, logo: "G", color: "#4285F4", tags: ["React", "TypeScript", "GraphQL"], posted: "2d ago", applicants: 142 },
  { id: 2, company: "Stripe", role: "React Engineer", location: "San Francisco, CA", salary: "$120k–$155k", type: "Full-time", remote: true, logo: "S", color: "#635BFF", tags: ["React", "Node.js", "AWS"], posted: "3d ago", applicants: 89 },
  { id: 3, company: "Airbnb", role: "UI/UX Engineer", location: "Remote", salary: "$110k–$145k", type: "Full-time", remote: true, logo: "A", color: "#FF5A5F", tags: ["Figma", "React", "CSS"], posted: "5d ago", applicants: 210 },
  { id: 4, company: "Spotify", role: "Frontend Developer", location: "New York, NY", salary: "$100k–$130k", type: "Full-time", remote: false, logo: "S", color: "#1DB954", tags: ["JavaScript", "Vue", "REST API"], posted: "1w ago", applicants: 67 },
  { id: 5, company: "Notion", role: "Product Engineer", location: "San Francisco, CA", salary: "$130k–$160k", type: "Full-time", remote: true, logo: "N", color: "#000", tags: ["React", "Electron", "TypeScript"], posted: "1w ago", applicants: 305 },
  { id: 6, company: "Figma", role: "Software Engineer", location: "Remote", salary: "$125k–$165k", type: "Full-time", remote: true, logo: "F", color: "#F24E1E", tags: ["C++", "WebGL", "React"], posted: "2w ago", applicants: 178 },
  { id: 7, company: "Vercel", role: "Developer Advocate", location: "Remote", salary: "$90k–$120k", type: "Full-time", remote: true, logo: "V", color: "#000", tags: ["Next.js", "DevRel", "Content"], posted: "2w ago", applicants: 54 },
  { id: 8, company: "Linear", role: "Frontend Engineer", location: "Remote", salary: "$115k–$140k", type: "Contract", remote: true, logo: "L", color: "#5E6AD2", tags: ["React", "TypeScript", "GraphQL"], posted: "3w ago", applicants: 98 },
];

export default function JobListPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [savedJobs, setSavedJobs] = useState([]);

  const filters = ["All", "Full-time", "Contract", "Remote"];

  const filtered = allJobs.filter(j => {
    const matchSearch = j.role.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || (filter === "Remote" ? j.remote : j.type === filter);
    return matchSearch && matchFilter;
  });

  const toggleSave = (id) => {
    setSavedJobs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .job-card:hover { box-shadow: 0 8px 24px rgba(79,70,229,0.12) !important; border-color: #a5b4fc !important; }
        .apply-btn:hover { background: #4338ca !important; }
        .tag { background: #f1f5f9; color: #475569; padding: 3px 10px; border-radius: 20px; font-size: 11px; font-weight: 500; }
      `}</style>

      {/* Top Nav */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#4f46e5" }}>Hire<span style={{ color: "#0f172a" }}>Me</span></div>
        <div style={{ display: "flex", gap: 8 }}>
          {["Dashboard", "Browse Jobs", "My Applications", "Saved"].map((nav, i) => (
            <button key={i} style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: nav === "Browse Jobs" ? "#ede9fe" : "transparent", color: nav === "Browse Jobs" ? "#4f46e5" : "#64748b", fontFamily: "inherit", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>{nav}</button>
          ))}
        </div>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700 }}>A</div>
      </header>

      <div style={{ padding: "36px 40px" }}>
        {/* Hero Search */}
        <div style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)", borderRadius: 20, padding: "36px 40px", marginBottom: 32, color: "#fff" }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 6 }}>Find Your Dream Job</h1>
          <p style={{ opacity: 0.8, marginBottom: 24, fontSize: 15 }}>{allJobs.length} open positions available for you</p>
          <div style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1, position: "relative" }}>
              <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search jobs, companies, skills..."
                style={{ width: "100%", padding: "12px 12px 12px 42px", borderRadius: 10, border: "none", fontSize: 14, fontFamily: "inherit", outline: "none" }}
              />
            </div>
            <button style={{ padding: "12px 28px", background: "#fff", color: "#4f46e5", border: "none", borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: "pointer", fontFamily: "inherit" }}>Search</button>
          </div>
        </div>

        <div style={{ display: "flex", gap: 24 }}>
          {/* Sidebar Filters */}
          <aside style={{ width: 220, flexShrink: 0 }}>
            <div style={{ background: "#fff", borderRadius: 14, padding: 20, boxShadow: "0 1px 6px rgba(0,0,0,0.05)", marginBottom: 16 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 14 }}>Job Type</h3>
              {filters.map(f => (
                <label key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, cursor: "pointer", fontSize: 14, color: filter === f ? "#4f46e5" : "#64748b", fontWeight: filter === f ? 600 : 400 }}>
                  <input type="radio" name="filter" checked={filter === f} onChange={() => setFilter(f)} style={{ accentColor: "#4f46e5" }} />
                  {f}
                </label>
              ))}
            </div>

            <div style={{ background: "#fff", borderRadius: 14, padding: 20, boxShadow: "0 1px 6px rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 14 }}>Salary Range</h3>
              {["$50k–$80k", "$80k–$120k", "$120k–$160k", "$160k+"].map(s => (
                <label key={s} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, cursor: "pointer", fontSize: 14, color: "#64748b" }}>
                  <input type="checkbox" style={{ accentColor: "#4f46e5" }} /> {s}
                </label>
              ))}
            </div>
          </aside>

          {/* Job Listings */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <p style={{ fontSize: 14, color: "#64748b" }}><strong style={{ color: "#0f172a" }}>{filtered.length} jobs</strong> found</p>
              <select style={{ padding: "6px 12px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 13, color: "#64748b", background: "#fff", fontFamily: "inherit", cursor: "pointer" }}>
                <option>Most Recent</option>
                <option>Salary: High to Low</option>
                <option>Most Applied</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filtered.map(job => (
                <div key={job.id} className="job-card" style={{ background: "#fff", borderRadius: 14, padding: "20px 22px", border: "1.5px solid #e2e8f0", transition: "all 0.2s", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: job.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 20, flexShrink: 0 }}>{job.logo}</div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <div>
                          <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 2 }}>{job.role}</h3>
                          <p style={{ fontSize: 13, color: "#64748b" }}>{job.company} · {job.location}</p>
                        </div>
                        <button onClick={() => toggleSave(job.id)} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 20 }}>
                          {savedJobs.includes(job.id) ? "🔖" : "🤍"}
                        </button>
                      </div>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "12px 0" }}>
                        <span className="tag">{job.type}</span>
                        {job.remote && <span className="tag">🌐 Remote</span>}
                        {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>

                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", gap: 16 }}>
                          <span style={{ fontSize: 14, fontWeight: 700, color: "#059669" }}>{job.salary}</span>
                          <span style={{ fontSize: 13, color: "#94a3b8" }}>{job.applicants} applicants · {job.posted}</span>
                        </div>
                        <button className="apply-btn" style={{ padding: "8px 20px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: "pointer", fontFamily: "inherit", transition: "background 0.15s" }}>Apply Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: "60px 20px", color: "#94a3b8" }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🔍</div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>No jobs found</div>
                  <div style={{ fontSize: 14, marginTop: 4 }}>Try a different search term</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}