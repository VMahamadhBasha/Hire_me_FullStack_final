import React from "react";
import "./MyJobsPage.css";

export default function MyJobsPage(){

const jobs=[
{title:"Senior Frontend Developer",company:"TechCorp",applicants:11,status:"OPEN"},
{title:"Backend Engineer",company:"DataStream",applicants:14,status:"OPEN"},
{title:"Product Designer",company:"DesignHub",applicants:7,status:"OPEN"}
];

return(

<div className="jobs">

<h2>My Jobs</h2>

{jobs.map((job,i)=>(

<div className="job-card" key={i}>

<div>
<h3>{job.title}</h3>
<p>{job.company} • {job.applicants} applicants</p>
</div>

<div className="right">

<span className="open">OPEN</span>

<button className="edit">Edit</button>

<button className="close">Close</button>

</div>

</div>

))}

</div>

)

}