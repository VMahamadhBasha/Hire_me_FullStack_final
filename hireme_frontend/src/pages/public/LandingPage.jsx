import React, { useState } from "react";
import "./LandingPage.css";

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append("search", searchQuery);
    if (locationQuery) params.append("location", locationQuery);
    window.location.href = `/jobs?${params.toString()}`;
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>
            Find Your <span className="highlight">Dream Job</span> Today
          </h1>
          <p>Connect with top companies looking for talented individuals like you.</p>
          {/* Search Box */}
          <form className="searchBox" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Job title, keywords, or company"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <input
              type="text"
              placeholder="City, state, or remote"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
            />
            <button type="submit">Search Jobs</button>
          </form>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat">
          <h2>10,000+</h2>
          <p>Active Jobs</p>
        </div>
        <div className="stat">
          <h2>5,000+</h2>
          <p>Companies</p>
        </div>
        <div className="stat">
          <h2>50,000+</h2>
          <p>Job Seekers</p>
        </div>
        <div className="stat">
          <h2>25,000+</h2>
          <p>Placements</p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Why Choose HireMe?</h2>
        <div className="featureContainer">
          <div className="feature">
            <h3>Smart Job Matching</h3>
            <p>AI matches your skills with best opportunities.</p>
          </div>
          <div className="feature">
            <h3>Easy Applications</h3>
            <p>Apply to multiple jobs with a single click.</p>
          </div>
          <div className="feature">
            <h3>Employer Profiles</h3>
            <p>Know company culture before applying.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Take the Next Step?</h2>
        <p>Join thousands of job seekers today.</p>
        <div className="buttons">
          <button className="btnPrimary">Create Free Account</button>
          <button className="btnOutline">Browse Jobs</button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;