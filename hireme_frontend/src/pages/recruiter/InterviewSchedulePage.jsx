import React from "react";
import "./Styles/InterviewSchedulePage.css";

export default function InterviewSchedulePage(){

const interviews=[
{candidate:"Varun",job:"Frontend Developer",date:"2026-03-15",time:"10:00 AM",type:"Phone",status:"Scheduled"},
{candidate:"Tharun",job:"Backend Engineer",date:"2026-03-16",time:"2:00 PM",type:"Video",status:"Scheduled"},
{candidate:"Lohith",job:"Product Designer",date:"2026-03-14",time:"11:00 AM",type:"Onsite",status:"Completed"}
];

return(

<div className="page">

<div className="page-header">
<h2>Interview Schedule</h2>
<button>Schedule Interview</button>
</div>

<table>

<thead>
<tr>
<th>Candidate</th>
<th>Job</th>
<th>Date</th>
<th>Time</th>
<th>Type</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{interviews.map((i,index)=>(
<tr key={index}>
<td>{i.candidate}</td>
<td>{i.job}</td>
<td>{i.date}</td>
<td>{i.time}</td>
<td>{i.type}</td>
<td>{i.status}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}