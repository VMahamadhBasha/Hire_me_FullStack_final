import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Navbar.css";

function Navbar({ role }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <span className="logo-hire">Hire</span><span className="logo-me">Me</span>
      </div>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>

        {/* No role - Public */}
        {!role && (
          <>
            <button className="nav-btn" onClick={() => navigate("/candidate/jobs")}>
              Find Jobs
            </button>
            <button className="nav-btn" onClick={() => navigate("/employer/dashboard")}>
              For Employers
            </button>
            <button className="nav-btn login-btn" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="nav-btn getstarted-btn" onClick={() => navigate("/register")}>
              Get Started
            </button>
          </>
        )}

        {/* Jobseeker Role */}
        {role === "jobseeker" && (
          <>
            <button className="nav-btn" onClick={() => navigate("/candidate/jobs")}>
              Find Jobs
            </button>
            <button className="nav-btn" onClick={() => navigate("/candidate/applications")}>
              My Applications
            </button>
            <button className="nav-btn" onClick={() => navigate("/candidate/dashboard")}>
              Dashboard
            </button>
            <div className="dropdown-wrapper">
              <button className="profile-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Profile ▾
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={() => { navigate("/candidate/dashboard"); setDropdownOpen(false); }}>
                    Dashboard
                  </button>
                  <button onClick={() => { navigate("/candidate/applications"); setDropdownOpen(false); }}>
                    My Applications
                  </button>
                  <button onClick={() => { navigate("/"); setDropdownOpen(false); }}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* Employer Role */}
        {role === "employer" && (
          <>
            <button className="nav-btn" onClick={() => navigate("/employer/post-job")}>
              Post a Job
            </button>
            <button className="nav-btn" onClick={() => navigate("/employer/my-jobs")}>
              My Jobs
            </button>
            <button className="nav-btn" onClick={() => navigate("/employer/dashboard")}>
              Dashboard
            </button>
            <div className="dropdown-wrapper">
              <button className="profile-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Profile ▾
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={() => { navigate("/employer/dashboard"); setDropdownOpen(false); }}>
                    Dashboard
                  </button>
                  <button onClick={() => { navigate("/employer/my-jobs"); setDropdownOpen(false); }}>
                    My Jobs
                  </button>
                  <button onClick={() => { navigate("/employer/post-job"); setDropdownOpen(false); }}>
                    Post a Job
                  </button>
                  <button onClick={() => { navigate("/"); setDropdownOpen(false); }}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}

        {/* Recruiter Role */}
        {role === "recruiter" && (
          <>
            <button className="nav-btn" onClick={() => navigate("/recruiter/applicants")}>
              Applicants
            </button>
            <button className="nav-btn" onClick={() => navigate("/recruiter/interviews")}>
              Interviews
            </button>
            <button className="nav-btn" onClick={() => navigate("/recruiter/dashboard")}>
              Dashboard
            </button>
            <div className="dropdown-wrapper">
              <button className="profile-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Profile ▾
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={() => { navigate("/recruiter/dashboard"); setDropdownOpen(false); }}>
                    Dashboard
                  </button>
                  <button onClick={() => { navigate("/recruiter/applicants"); setDropdownOpen(false); }}>
                    Applicants
                  </button>
                  <button onClick={() => { navigate("/recruiter/interviews"); setDropdownOpen(false); }}>
                    Interviews
                  </button>
                  <button onClick={() => { navigate("/"); setDropdownOpen(false); }}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;