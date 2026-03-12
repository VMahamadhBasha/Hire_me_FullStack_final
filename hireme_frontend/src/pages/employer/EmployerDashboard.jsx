import React from "react";
import "./EmployerDashboard.css";

export default function EmployerDashboard() {

const applications=[
{ name:"Varun", email:"varun@example.com", job:"Senior Frontend Developer", date:"2026-03-08", status:"PENDING"},
{ name:"Basha", email:"basha@example.com", job:"Backend Engineer", date:"2026-03-07", status:"REVIEWING"},
{ name:"Lohith", email:"lohith@example.com", job:"Product Designer", date:"2026-03-06", status:"INTERVIEW"}
];

return(

<div className="employer-dashboard">

<div className="header">

<div className="header-left">
<div className="icon">🏢</div>

<div>
<h2>Employer Dashboard</h2>
<p>Welcome back, vinay2!</p>
</div>
</div>

<button className="post-btn">+ Post a Job</button>

</div>


<div className="stats">

<div className="card">
<h3>3</h3>
<p>Active Jobs</p>
</div>

<div className="card">
<h3>3</h3>
<p>Total Applications</p>
</div>

<div className="card">
<h3>1</h3>
<p>In Review</p>
</div>

<div className="card">
<h3>1</h3>
<p>Scheduled Interviews</p>
</div>

</div>


<div className="tabs">
<span className="active">Overview</span>
<span>Applications</span>
<span>My Jobs</span>
</div>


<h3 className="section-title">Recent Applications</h3>

<table>

<thead>
<tr>
<th>Candidate</th>
<th>Position</th>
<th>Applied</th>
<th>Status</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{applications.map((app,i)=>(
<tr key={i}>

<td>
<div className="candidate">
<div className="avatar">{app.name[0]}</div>
<div>
<strong>{app.name}</strong>
<p>{app.email}</p>
</div>
</div>
</td>

<td>{app.job}</td>
<td>{app.date}</td>

<td>
<span className={`status ${app.status.toLowerCase()}`}>
{app.status}
</span>
</td>

<td className="view">View</td>

</tr>
))}

</tbody>

</table>

</div>

)

}