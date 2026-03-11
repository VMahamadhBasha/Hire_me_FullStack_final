import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Navbar.css";

function Navbar({ role }) {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="navbar-logo" onClick={() => navigate("/")}>
        HireMe
      </div>

      <div className="navbar-links">

        {!role && (
          <>
            <button onClick={() => navigate("/jobs")}>Find Jobs</button>
            <button onClick={() => navigate("/employers")}>For Employers</button>
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>GetStarted
            </button>
          </>
        )}

        {role === "jobseeker" && (
          <>
            <button onClick={() => navigate("/jobs")}>Find Jobs</button>
            <button onClick={() => navigate("/my-applications")}>My Applications</button>
            <button onClick={() => navigate("/saved-jobs")}>Saved Jobs</button>
            <div className="dropdown-wrapper">
              <button className="profile-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Profile ▾
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={() => { navigate("/profile"); setDropdownOpen(false); }}>Profile</button>
                  <button onClick={() => { navigate("/settings"); setDropdownOpen(false); }}>Settings</button>
                  <button onClick={() => { navigate("/"); setDropdownOpen(false); }}>Logout</button>
                </div>
              )}
            </div>
          </>
        )}

        {role === "employer" && (
          <>
            <button onClick={() => navigate("/post-job")}>Post a Job</button>
            <button onClick={() => navigate("/my-listings")}>My Listings</button>
            <button onClick={() => navigate("/applicants")}>Applicants</button>
            <div className="dropdown-wrapper">
              <button className="profile-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Profile ▾
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={() => { navigate("/company-profile"); setDropdownOpen(false); }}>Company Profile</button>
                  <button onClick={() => { navigate("/billing"); setDropdownOpen(false); }}>Billing</button>
                  <button onClick={() => { navigate("/"); setDropdownOpen(false); }}>Logout</button>
                </div>
              )}
            </div>
          </>
        )}

        {role === "recruiter" && (
          <>
            <button onClick={() => navigate("/search-talent")}>Search Talent</button>
            <button onClick={() => navigate("/pipeline")}>Pipeline</button>
            <button onClick={() => navigate("/messages")}>Messages</button>
            <div className="dropdown-wrapper">
              <button className="profile-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Profile ▾
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <button onClick={() => { navigate("/my-profile"); setDropdownOpen(false); }}>My Profile</button>
                  <button onClick={() => { navigate("/settings"); setDropdownOpen(false); }}>Settings</button>
                  <button onClick={() => { navigate("/"); setDropdownOpen(false); }}>Logout</button>
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