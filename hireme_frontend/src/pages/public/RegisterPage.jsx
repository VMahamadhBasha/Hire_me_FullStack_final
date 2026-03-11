import { useState } from "react";
import "./Stylings/RegisterPage.css";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [role, setRole]                   = useState("jobseeker");
  const [fullName, setFullName]           = useState("");
  const [email, setEmail]                 = useState("");
  const [phone, setPhone]                 = useState("");
  const [gender, setGender]               = useState("");
  const [companyName, setCompanyName]     = useState("");
  const [password, setPassword]           = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword]   = useState(false);
  const [showConfirm, setShowConfirm]     = useState(false);
  const [agreed, setAgreed]               = useState(false);
  const [error, setError]                 = useState("");
  const [success, setSuccess]             = useState("");

  function handleRegister() {
    setError("");
    setSuccess("");

    // Simple validation
    if (!fullName) {
      setError("Please enter your full name.");
      return;
    }
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!phone || phone.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!gender) {
      setError("Please select your gender.");
      return;
    }
    if ((role === "employer" || role === "recruiter") && !companyName) {
      setError("Please enter your company name.");
      return;
    }
    if (!password) {
      setError("Please enter a password.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    // TODO: When backend is ready, call your API here
    // Example:
    // fetch("http://localhost:8080/api/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ fullName, email, phone, gender, password, role, companyName })
    // })

    // For now just show success
    setSuccess("Account created successfully! Please login.");
    setFullName("");
    setEmail("");
    setPhone("");
    setGender("");
    setCompanyName("");
    setPassword("");
    setConfirmPassword("");
    setAgreed(false);
  }

  return (
    <div className="register-page">

      {/* Logo */}
      <div className="register-logo">
        <span className="logo-hire">Hire</span>
        <span className="logo-me">Me</span>
      </div>

      <div className="register-card">

        <h1 className="register-title">Join thousands of job seekers and employers</h1>
        <p className="register-subtitle">Create your free account today</p>

        {/* I am a... */}
        <p className="role-label">I am a...</p>

        {/* Role Cards */}
        <div className="role-cards">

          <div
            className={role === "jobseeker" ? "role-card active" : "role-card"}
            onClick={() => { setRole("jobseeker"); setError(""); }}
          >
            <span className="role-card-icon">🧑‍💼</span>
            <span className="role-card-title">Job Seeker</span>
            <span className="role-card-desc">Looking for jobs</span>
          </div>

          <div
            className={role === "employer" ? "role-card active" : "role-card"}
            onClick={() => { setRole("employer"); setError(""); }}
          >
            <span className="role-card-icon">🏢</span>
            <span className="role-card-title">Employer</span>
            <span className="role-card-desc">Hiring talent</span>
          </div>

          <div
            className={role === "recruiter" ? "role-card active" : "role-card"}
            onClick={() => { setRole("recruiter"); setError(""); }}
          >
            <span className="role-card-icon">🔍</span>
            <span className="role-card-title">Recruiter</span>
            <span className="role-card-desc">Find candidates</span>
          </div>

        </div>

        {/* Note for employer / recruiter */}
        {(role === "employer" || role === "recruiter") && (
          <div className="recruiter-note">
            ⏳ This account needs admin approval before you can post jobs.
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="error-box">⚠️ {error}</div>
        )}

        {/* Success message */}
        {success && (
          <div className="success-box">🎉 {success}</div>
        )}

        {/* Full Name */}
        <div className="field">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="field">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Phone + Gender side by side */}
        <div className="field-row">
          <div className="field">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="10-digit number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={10}
            />
          </div>
          <div className="field">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Company Name - only for employer or recruiter */}
        {(role === "employer" || role === "recruiter") && (
          <div className="field">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Your company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        )}

        {/* Password */}
        <div className="field">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Min 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="field">
          <label>Confirm Password</label>
          <div className="password-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        {/* Terms checkbox */}
        <div className="terms-row">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          />
          <span>
            I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
          </span>
        </div>

        {/* Register Button */}
        <button className="register-btn" onClick={handleRegister}>
          Create Account
        </button>

        {/* Divider */}
        <div className="divider">
          <span className="divider-line"></span>
          <span className="divider-text">or</span>
          <span className="divider-line"></span>
        </div>

         <p className="login-text">
          Already have an account?{" "}
          <span className="login-link" onClick={() => navigate("/login")}>
            Sign in here
          </span>
        </p>

      </div>
    </div>
  );
}