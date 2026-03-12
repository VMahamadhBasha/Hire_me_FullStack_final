import { useState } from "react";

const job = {
  company: "Google",
  role: "Senior Frontend Engineer",
  location: "Mountain View, CA",
  salary: "$140k–$180k",
  logo: "G",
  color: "#4285F4",
};

const steps = ["Personal Info", "Experience", "Resume & Cover", "Review"];

export default function ApplyJobPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "Alex Johnson",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 234-5678",
    linkedin: "linkedin.com/in/alexjohnson",
    portfolio: "alexjohnson.dev",
    location: "San Francisco, CA",
    yearsExp: "5",
    currentRole: "Frontend Developer",
    currentCompany: "Startup Inc.",
    expectedSalary: "$155,000",
    noticePeriod: "2 weeks",
    coverLetter: "I am very excited about the opportunity to join Google as a Senior Frontend Engineer. With 5+ years of experience building scalable web applications using React and TypeScript, I believe I can make a meaningful impact on your team...",
    workAuth: "Yes",
    willingToRelocate: "No",
  });

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const inputStyle = {
    width: "100%", padding: "10px 14px", border: "1.5px solid #e2e8f0",
    borderRadius: 10, fontSize: 14, fontFamily: "inherit", outline: "none",
    transition: "border-color 0.15s", background: "#fff", color: "#0f172a"
  };

  const labelStyle = { fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6, display: "block" };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        input:focus, textarea:focus, select:focus { border-color: #4f46e5 !important; box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }
        textarea { resize: vertical; }
        .next-btn:hover { background: #4338ca !important; }
      `}</style>

      {/* Header */}
      <header style={{ background: "#fff", borderBottom: "1px solid #e2e8f0", padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ fontSize: 22, fontWeight: 800, color: "#4f46e5" }}>Hire<span style={{ color: "#0f172a" }}>Me</span></div>
        <div style={{ fontSize: 14, color: "#94a3b8" }}>Applying to <strong style={{ color: "#0f172a" }}>{job.company}</strong></div>
        <button style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: "#64748b", fontFamily: "inherit" }}>✕ Cancel</button>
      </header>

      {submitted ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 64px)" }}>
          <div style={{ background: "#fff", borderRadius: 20, padding: 48, textAlign: "center", maxWidth: 480, boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 36 }}>🎉</div>
            <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 8 }}>Application Submitted!</h2>
            <p style={{ fontSize: 14, color: "#64748b", marginBottom: 24, lineHeight: 1.7 }}>Your application to <strong>Google</strong> for <strong>Senior Frontend Engineer</strong> has been sent. We'll notify you when there's an update.</p>
            <div style={{ background: "#f8fafc", borderRadius: 12, padding: 16, marginBottom: 24, textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, color: "#94a3b8" }}>Application ID</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#4f46e5" }}>#APP-2026-0312</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13, color: "#94a3b8" }}>Submitted</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#0f172a" }}>Mar 12, 2026</span>
              </div>
            </div>
            <button style={{ width: "100%", padding: "13px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>View My Applications</button>
          </div>
        </div>
      ) : (
        <div style={{ padding: "32px 40px", maxWidth: 780, margin: "0 auto" }}>
          {/* Job Banner */}
          <div style={{ background: "#fff", borderRadius: 14, padding: "16px 20px", boxShadow: "0 1px 6px rgba(0,0,0,0.05)", marginBottom: 28, display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: job.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: 20 }}>{job.logo}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>{job.role}</div>
              <div style={{ fontSize: 13, color: "#64748b" }}>{job.company} · {job.location} · {job.salary}</div>
            </div>
          </div>

          {/* Step Indicator */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 32 }}>
            {steps.map((s, i) => {
              const num = i + 1;
              const isDone = step > num;
              const isCurrent = step === num;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", flex: i < steps.length - 1 ? 1 : 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: 13,
                      background: isDone ? "#4f46e5" : isCurrent ? "#ede9fe" : "#f1f5f9",
                      color: isDone ? "#fff" : isCurrent ? "#4f46e5" : "#94a3b8",
                      border: isCurrent ? "2px solid #4f46e5" : "none"
                    }}>{isDone ? "✓" : num}</div>
                    <span style={{ fontSize: 13, fontWeight: isCurrent ? 700 : 500, color: isCurrent ? "#4f46e5" : isDone ? "#0f172a" : "#94a3b8" }}>{s}</span>
                  </div>
                  {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: isDone ? "#4f46e5" : "#e2e8f0", margin: "0 12px" }}></div>}
                </div>
              );
            })}
          </div>

          {/* Form Card */}
          <div style={{ background: "#fff", borderRadius: 18, padding: 28, boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
            {step === 1 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", marginBottom: 20 }}>Personal Information</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                  {[["fullName", "Full Name", "text"], ["email", "Email Address", "email"], ["phone", "Phone Number", "tel"], ["location", "Current Location", "text"], ["linkedin", "LinkedIn URL", "text"], ["portfolio", "Portfolio Website", "text"]].map(([key, label, type]) => (
                    <div key={key}>
                      <label style={labelStyle}>{label}</label>
                      <input type={type} value={form[key]} onChange={e => update(key, e.target.value)} style={inputStyle} />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 18 }}>
                  <label style={labelStyle}>Work Authorization</label>
                  <select value={form.workAuth} onChange={e => update("workAuth", e.target.value)} style={inputStyle}>
                    <option>Yes - US Citizen</option>
                    <option>Yes - Permanent Resident</option>
                    <option>Need Sponsorship</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", marginBottom: 20 }}>Work Experience</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                  {[["currentRole", "Current Job Title", "text"], ["currentCompany", "Current Company", "text"], ["yearsExp", "Years of Experience", "number"], ["expectedSalary", "Expected Salary", "text"], ["noticePeriod", "Notice Period", "text"]].map(([key, label, type]) => (
                    <div key={key}>
                      <label style={labelStyle}>{label}</label>
                      <input type={type} value={form[key]} onChange={e => update(key, e.target.value)} style={inputStyle} />
                    </div>
                  ))}
                  <div>
                    <label style={labelStyle}>Willing to Relocate?</label>
                    <select value={form.willingToRelocate} onChange={e => update("willingToRelocate", e.target.value)} style={inputStyle}>
                      <option>Yes</option>
                      <option>No</option>
                      <option>Depends on offer</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", marginBottom: 20 }}>Resume & Cover Letter</h2>
                <div style={{ border: "2px dashed #c7d2fe", borderRadius: 14, padding: "32px 20px", textAlign: "center", marginBottom: 20, cursor: "pointer", background: "#fafafe" }}>
                  <div style={{ fontSize: 36, marginBottom: 8 }}>📄</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "#4f46e5", marginBottom: 4 }}>Upload Resume</div>
                  <div style={{ fontSize: 13, color: "#94a3b8" }}>PDF or DOC up to 5MB — or drag & drop</div>
                  <div style={{ marginTop: 12, display: "inline-block", background: "#ede9fe", color: "#4f46e5", padding: "7px 18px", borderRadius: 8, fontSize: 13, fontWeight: 600 }}>Alex_Johnson_Resume.pdf ✓</div>
                </div>
                <div>
                  <label style={labelStyle}>Cover Letter</label>
                  <textarea rows={7} value={form.coverLetter} onChange={e => update("coverLetter", e.target.value)} style={{ ...inputStyle, lineHeight: 1.7 }} />
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", marginBottom: 20 }}>Review Your Application</h2>
                {[
                  { title: "Personal Info", fields: [["Name", form.fullName], ["Email", form.email], ["Phone", form.phone], ["Location", form.location]] },
                  { title: "Experience", fields: [["Current Role", form.currentRole], ["Company", form.currentCompany], ["Experience", `${form.yearsExp} years`], ["Expected Salary", form.expectedSalary]] },
                ].map((section, si) => (
                  <div key={si} style={{ marginBottom: 20, background: "#f8fafc", borderRadius: 12, padding: 18 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#4f46e5", marginBottom: 12 }}>{section.title}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                      {section.fields.map(([l, v]) => (
                        <div key={l}>
                          <div style={{ fontSize: 12, color: "#94a3b8" }}>{l}</div>
                          <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div style={{ background: "#ede9fe", borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 13, color: "#4f46e5", fontWeight: 600 }}>📄 Resume: Alex_Johnson_Resume.pdf attached</div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, paddingTop: 20, borderTop: "1px solid #f1f5f9" }}>
              <button onClick={() => setStep(prev => Math.max(1, prev - 1))} disabled={step === 1} style={{ padding: "10px 24px", border: "1.5px solid #e2e8f0", borderRadius: 10, background: "transparent", color: "#64748b", fontFamily: "inherit", fontWeight: 600, fontSize: 14, cursor: step === 1 ? "not-allowed" : "pointer", opacity: step === 1 ? 0.4 : 1 }}>← Previous</button>
              {step < 4 ? (
                <button className="next-btn" onClick={() => setStep(prev => prev + 1)} style={{ padding: "10px 28px", background: "#4f46e5", color: "#fff", border: "none", borderRadius: 10, fontFamily: "inherit", fontWeight: 700, fontSize: 14, cursor: "pointer", transition: "background 0.15s" }}>Continue →</button>
              ) : (
                <button onClick={() => setSubmitted(true)} style={{ padding: "10px 28px", background: "linear-gradient(135deg, #4f46e5, #7c3aed)", color: "#fff", border: "none", borderRadius: 10, fontFamily: "inherit", fontWeight: 700, fontSize: 14, cursor: "pointer", boxShadow: "0 4px 14px rgba(79,70,229,0.35)" }}>🚀 Submit Application</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}