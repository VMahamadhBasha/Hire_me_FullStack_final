import React, { useState } from "react";
import "./Styles/RecruiterDashboard.css";

export default function RecruiterDashboard() {

const [tab,setTab] = useState("overview")

const candidates = [
{
name:"Varun",
email:"varun@example.com",
position:"Senior Frontend Developer",
company:"TechCorp",
score:95,
status:"Pending"
},
{
name:"Basha",
email:"basha@example.com",
position:"Backend Engineer",
company:"DataStream",
score:92,
status:"Reviewing"
},
{
name:"Lohith",
email:"lohith@example.com",
position:"Product Designer",
company:"DesignHub",
score:88,
status:"Interview"
},
{
name:"Yashwanth",
email:"yashwanth@example.com",
position:"DevOps Engineer",
company:"CloudNet",
score:90,
status:"Pending"
}
];

const jobs=[
{
title:"Senior Frontend Developer",
company:"TechCorp",
applicants:17,
interviews:4,
status:"OPEN"
},
{
title:"Backend Engineer",
company:"DataStream",
applicants:17,
interviews:2,
status:"OPEN"
},
{
title:"Product Designer",
company:"DesignHub",
applicants:5,
interviews:4,
status:"OPEN"
}
];

return(

<div className="dashboard">

{/* HEADER */}

<div className="header">

<div className="header-left">

<div className="avatar-icon">👥</div>

<div>
<h2>Recruiter Dashboard</h2>
<p>Welcome back, vinay!</p>
</div>

</div>

<button className="find-btn">🔍 Find Candidates</button>

</div>

{/* STATS */}

<div className="stats">

<div className="stat-card">
<span>💼</span>
<h3>3</h3>
<p>Active Jobs</p>
</div>

<div className="stat-card">
<span>👤</span>
<h3>4</h3>
<p>Candidates Reviewed</p>
</div>

<div className="stat-card">
<span>📅</span>
<h3>1</h3>
<p>Interviews Scheduled</p>
</div>

<div className="stat-card">
<span>⭐</span>
<h3>11</h3>
<p>Successful Hires</p>
</div>

</div>

{/* TABS */}

<div className="tabs">

<span
className={tab==="overview"?"active":""}
onClick={()=>setTab("overview")}
>
Overview
</span>

<span
className={tab==="candidates"?"active":""}
onClick={()=>setTab("candidates")}
>
Top Candidates
</span>

<span
className={tab==="jobs"?"active":""}
onClick={()=>setTab("jobs")}
>
Assigned Jobs
</span>

</div>

{/* OVERVIEW */}

{tab==="overview" && (

<div>

<h3 className="section-title">Recent Recruitment Activity</h3>

<div className="table">

<div className="table-head">
<span>Candidate</span>
<span>Position</span>
<span>Company</span>
<span>Status</span>
<span>Actions</span>
</div>

{candidates.map((c,i)=>(

<div className="table-row" key={i}>

<div className="candidate">

<div className="avatar">{c.name[0]}</div>

<div>
<strong>{c.name}</strong>
<p>{c.email}</p>
</div>

</div>

<span>{c.position}</span>

<span>{c.company}</span>

<span className={`status ${c.status.toLowerCase()}`}>
{c.status}
</span>

<div className="actions">
<span className="link">View Profile</span>
<span className="link blue">Schedule</span>
</div>

</div>

))}

</div>

</div>

)}

{/* TOP CANDIDATES */}

{tab==="candidates" && (

<div>

<div className="search-bar">

<input placeholder="Search candidates by name, skill, or role..." />

<select>
<option>All Skills</option>
</select>

<select>
<option>All Companies</option>
</select>

</div>

{candidates.map((c,i)=>(

<div className="candidate-card" key={i}>

<div className="candidate-left">

<div className="avatar large">{c.name[0]}</div>

<div>
<h3>{c.name}</h3>
<p>{c.position}</p>
<span className="company">{c.company}</span>
</div>

</div>

<div className="match-score">

<h2>{c.score}%</h2>
<p>Match Score</p>

</div>

<div className="candidate-actions">

<button className="contact">Contact</button>

<button className="profile">View Profile</button>

</div>

</div>

))}

</div>

)}

{/* ASSIGNED JOBS */}

{tab==="jobs" && (

<div>

{jobs.map((job,i)=>(

<div className="job-card" key={i}>

<div>

<h3>{job.title}</h3>

<p className="company">{job.company}</p>

<div className="job-info">

<span>👥 {job.applicants} applicants</span>

<span>✔ {job.interviews} interviews</span>

</div>

</div>

<div className="job-right">

<span className="job-status">OPEN</span>

<button className="view-btn">
View Candidates
</button>

</div>

</div>

))}

</div>

)}

</div>

)

}