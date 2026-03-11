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
  const [loggedInUser, setLoggedInUser] = useState(null);

  // ── Simulated backend users (replace with your real API call) ──
  const fakeBackendUsers = {
    "john@hireme.com": { password: "john123", role: "jobseeker", name: "John Doe" },
    "sarah@hireme.com": { password: "sarah123", role: "recruiter", name: "Sarah Smith" },
  };

  // Replace this function body with your actual fetch/axios API call
  function callBackendLogin(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = fakeBackendUsers[email];
        if (user && user.password === password) {
          resolve({ name: user.name, role: user.role, email });
        } else {
          reject(new Error("Invalid email or password."));
        }
      }, 1000);
    });
  }

  async function handleLogin() {
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const user = await callBackendLogin(email, password);

      if (rememberMe) {
        localStorage.setItem("hireme_user", JSON.stringify(user));
      }

      setLoggedInUser(user);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleLogout() {
    setLoggedInUser(null);
    setEmail("");
    setPassword("");
    setError("");
    localStorage.removeItem("hireme_user");
  }

  // ── Success Screen ──
  if (loggedInUser) {
    return (
      <div className="login-page">
        <div className="success-card">
          <div className="success-icon">✓</div>
          <h2 className="success-title">Welcome, {loggedInUser.name}!</h2>
          <p className="success-role">
            Role from backend: <strong>{loggedInUser.role === "jobseeker" ? "Job Seeker" : "Recruiter"}</strong>
          </p>
          <p className="success-note">
            ✅ Login works! Role was received from backend.
          </p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  // ── Login Form ──
  return (
    <div className="login-page">

      <div className="login-logo">
        <span className="logo-hire">Hire</span>
        <span className="logo-me">Me</span>
      </div>

      <div className="login-card">

        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Sign in to continue to HireMe</p>

        {error && (
          <div className="error-box">⚠️ {error}</div>
        )}

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
            <button
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
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

        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
        >
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
          <p className="demo-title">Demo: Use any email. Add "employer" to email for employer account.</p>
          </div>

      </div>
    </div>
  );
}