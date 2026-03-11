import { useState } from "react";
import "./Stylings/LoginPage.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Fake users for testing - replace with real API call later
  const fakeUsers = [
    { email: "madhu@hireme.com", password: "123456", role: "jobseeker" },
    { email: "basha@hireme.com", password: "123456", role: "recruiter" },
    { email: "emp@hireme.com",   password: "123456", role: "employer" },
  ];

  function handleLogin() {
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    /* ── REPLACE THIS BLOCK WITH REAL API CALL ──────────────────────
    
    fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
      // data should contain: { email, role }
      if (data.role === "jobseeker") navigate("/jobs");
      else if (data.role === "employer") navigate("/employer-dashboard");
      else if (data.role === "recruiter") navigate("/recruiter-dashboard");
    })
    .catch(err => setError("Invalid email or password."));
    
    ────────────────────────────────────────────────────────────────── */

    // Fake login logic - remove when using real API
    const user = fakeUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    if (rememberMe) {
      localStorage.setItem("hireme_user", JSON.stringify(user));
    }

    // Navigate based on role
    if (user.role === "jobseeker") {
      navigate("/jobs");
    } else if (user.role === "employer") {
      navigate("/employer-dashboard");
    } else if (user.role === "recruiter") {
      navigate("/recruiter-dashboard");
    }

    setLoading(false);
  }

  return (
    <div className="login-page">

      <div className="login-logo">
        <span className="logo-hire">Hire</span>
        <span className="logo-me">Me</span>
      </div>

      <div className="login-card">

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to continue to HireMe</p>

        {error && <div className="error-box">⚠️ {error}</div>}

        <div className="field">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="bottom-row">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <a href="#" className="forgot-link">Forgot password?</a>
        </div>

        <button className="login-btn" onClick={handleLogin} disabled={loading}>
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <div className="divider">
          <span className="divider-line"></span>
          <span className="divider-text">or</span>
          <span className="divider-line"></span>
        </div>

        <p className="register-text">
          Don't have an account?{" "}
          <span className="register-link" onClick={() => navigate("/register")}>
            Register here
          </span>
        </p>

        <div className="demo-box">
          <p className="demo-title">Demo Credentials:</p>
          <p>jobseeker: madhu@hireme.com / 123456</p>
          <p>recruiter: basha@hireme.com / 123456</p>
          <p>employer: emp@hireme.com / 123456</p>
        </div>

      </div>
    </div>
  );
}