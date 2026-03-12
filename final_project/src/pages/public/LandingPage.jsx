import React, { useState } from "react";
import "./Stylings/LandingPage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

// Dummy Data
const featuredJobs = [
  { id: 1, title: "Frontend Developer", company: "Google", location: "Remote", type: "Full Time", salary: "$80k - $100k" },
  { id: 2, title: "Backend Developer", company: "Amazon", location: "New York", type: "Full Time", salary: "$90k - $120k" },
  { id: 3, title: "UI/UX Designer", company: "Facebook", location: "San Francisco", type: "Contract", salary: "$70k - $90k" },
  { id: 4, title: "Data Analyst", company: "Microsoft", location: "Remote", type: "Part Time", salary: "$60k - $80k" },
  { id: 5, title: "DevOps Engineer", company: "Netflix", location: "Austin", type: "Full Time", salary: "$100k - $130k" },
  { id: 6, title: "Product Manager", company: "Apple", location: "Cupertino", type: "Full Time", salary: "$110k - $140k" },
];

const categories = [
  { id: 1, name: "Technology", icon: "💻", count: 1200 },
  { id: 2, name: "Marketing", icon: "📢", count: 850 },
  { id: 3, name: "Finance", icon: "💰", count: 640 },
  { id: 4, name: "Healthcare", icon: "🏥", count: 920 },
  { id: 5, name: "Education", icon: "📚", count: 430 },
  { id: 6, name: "Design", icon: "🎨", count: 560 },
  { id: 7, name: "Sales", icon: "🤝", count: 780 },
  { id: 8, name: "Engineering", icon: "⚙️", count: 1100 },
];

const topCompanies = [
  { id: 1, name: "Google", industry: "Technology", jobs: 45, logo: "G" },
  { id: 2, name: "Amazon", industry: "E-Commerce", jobs: 38, logo: "A" },
  { id: 3, name: "Microsoft", industry: "Technology", jobs: 52, logo: "M" },
  { id: 4, name: "Facebook", industry: "Social Media", jobs: 29, logo: "F" },
  { id: 5, name: "Netflix", industry: "Entertainment", jobs: 18, logo: "N" },
  { id: 6, name: "Apple", industry: "Technology", jobs: 61, logo: "Ap" },
];

const testimonials = [
  { id: 1, name: "Sarah Johnson", role: "Software Engineer", text: "HireMe helped me land my dream job in just 2 weeks! The platform is so easy to use.", avatar: "SJ" },
  { id: 2, name: "Michael Chen", role: "Product Manager", text: "I found amazing candidates for my team through HireMe. Highly recommended!", avatar: "MC" },
  { id: 3, name: "Emily Davis", role: "UX Designer", text: "The job matching feature is incredible. Got 5 interview calls in the first week!", avatar: "ED" },
];

function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append("search", searchQuery);
    if (locationQuery) params.append("location", locationQuery);
    navigate(`/candidate/jobs?${params.toString()}`);
  };

  return (
    <>
      <Navbar />

      <div className="landingPage">

        {/* Hero Section */}
        <section className="hero">
          <div className="heroContainer">
            <h1>Find Your <span className="highlight">Dream Job</span> Today</h1>
            <p className="heroSubtitle">Connect with top companies looking for talented individuals like you.</p>

            {/* Search Box */}
            <form className="searchBox" onSubmit={handleSearch}>
              <div className="searchInputs">
                <div className="searchField">
                  <span className="searchIcon">🔍</span>
                  <input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="searchField">
                  <span className="searchIcon">📍</span>
                  <input
                    type="text"
                    placeholder="City, state, or remote"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                  />
                </div>
                <button type="submit" className="searchBtn">Search Jobs</button>
              </div>
            </form>

            <p className="heroTags">
              Popular: <span onClick={() => navigate("/candidate/jobs")}>React Developer</span>
              <span onClick={() => navigate("/candidate/jobs")}>Python</span>
              <span onClick={() => navigate("/candidate/jobs")}>Data Science</span>
              <span onClick={() => navigate("/candidate/jobs")}>UI/UX</span>
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <div className="statsContainer">
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
          </div>
        </section>

        {/* Job Categories Section */}
        <section className="categories">
          <div className="sectionContainer">
            <h2 className="sectionTitle">Browse by Category</h2>
            <p className="sectionSubtitle">Find jobs in your area of expertise</p>
            <div className="categoriesGrid">
              {categories.map((cat) => (
                <div className="categoryCard" key={cat.id} onClick={() => navigate("/candidate/jobs")}>
                  <span className="categoryIcon">{cat.icon}</span>
                  <h3>{cat.name}</h3>
                  <p>{cat.count} Jobs</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs Section */}
        <section className="featuredJobs">
          <div className="sectionContainer">
            <h2 className="sectionTitle">Featured Jobs</h2>
            <p className="sectionSubtitle">Hand-picked opportunities from top companies</p>
            <div className="jobsGrid">
              {featuredJobs.map((job) => (
                <div className="jobCard" key={job.id} onClick={() => navigate(`/candidate/jobs/${job.id}`)}>
                  <div className="jobCardHeader">
                    <div className="companyLogo">{job.company[0]}</div>
                    <span className="jobType">{job.type}</span>
                  </div>
                  <h3 className="jobTitle">{job.title}</h3>
                  <p className="jobCompany">{job.company}</p>
                  <div className="jobMeta">
                    <span>📍 {job.location}</span>
                    <span>💰 {job.salary}</span>
                  </div>
                  <button className="applyBtn" onClick={(e) => { e.stopPropagation(); navigate(`/candidate/jobs/${job.id}/apply`); }}>
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
            <div className="viewAllWrapper">
              <button className="viewAllBtn" onClick={() => navigate("/candidate/jobs")}>View All Jobs</button>
            </div>
          </div>
        </section>

        {/* Top Companies Section */}
        <section className="topCompanies">
          <div className="sectionContainer">
            <h2 className="sectionTitle">Top Companies Hiring</h2>
            <p className="sectionSubtitle">Join the world's leading organizations</p>
            <div className="companiesGrid">
              {topCompanies.map((company) => (
                <div className="companyCard" key={company.id}>
                  <div className="companyLogo">{company.logo}</div>
                  <h3>{company.name}</h3>
                  <p>{company.industry}</p>
                  <span className="jobCount">{company.jobs} Open Jobs</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="sectionContainer">
            <h2 className="sectionTitle">Why Choose HireMe?</h2>
            <p className="sectionSubtitle">Everything you need to find your perfect job</p>
            <div className="featuresGrid">
              <div className="featureCard">
                <span className="featureIcon">🤖</span>
                <h3>Smart Job Matching</h3>
                <p>AI matches your skills with the best opportunities available.</p>
              </div>
              <div className="featureCard">
                <span className="featureIcon">⚡</span>
                <h3>Easy Applications</h3>
                <p>Apply to multiple jobs with a single click using your profile.</p>
              </div>
              <div className="featureCard">
                <span className="featureIcon">🏢</span>
                <h3>Employer Profiles</h3>
                <p>Know company culture and reviews before applying.</p>
              </div>
              <div className="featureCard">
                <span className="featureIcon">🔔</span>
                <h3>Job Alerts</h3>
                <p>Get notified instantly when new matching jobs are posted.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <div className="sectionContainer">
            <h2 className="sectionTitle">Success Stories</h2>
            <p className="sectionSubtitle">Hear from people who found their dream jobs</p>
            <div className="testimonialsGrid">
              {testimonials.map((t) => (
                <div className="testimonialCard" key={t.id}>
                  <p className="testimonialText">"{t.text}"</p>
                  <div className="testimonialAuthor">
                    <div className="testimonialAvatar">{t.avatar}</div>
                    <div>
                      <h4>{t.name}</h4>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="ctaContainer">
            <h2>Ready to Take the Next Step?</h2>
            <p>Join thousands of job seekers and employers today.</p>
            <div className="ctaButtons">
              <button className="btnPrimary" onClick={() => navigate("/register")}>Create Free Account</button>
              <button className="btnOutline" onClick={() => navigate("/candidate/jobs")}>Browse Jobs</button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default LandingPage;