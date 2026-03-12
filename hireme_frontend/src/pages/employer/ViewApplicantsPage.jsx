import React from "react";
import "./ViewApplicationPage.css";

export default function ViewApplicationPage(){

const apps=[
{ name:"Varun", email:"varun@example.com", job:"Senior Frontend Developer", status:"PENDING"},
{ name:"Basha", email:"basha@example.com", job:"Senior Frontend Developer", status:"REVIEWING"},
{ name:"Lohith", email:"lohith@example.com", job:"Senior Frontend Developer", status:"INTERVIEW"}
];

return(

<div className="applications">

<h2>Applications</h2>

{apps.map((app,i)=>(

<div className="app-card" key={i}>

<div className="left">

<div className="avatar">{app.name[0]}</div>

<div>
<h3>{app.name}</h3>
<p>{app.email}</p>
<p>Applied for: {app.job}</p>
</div>

</div>

<div className="right">

<span className={`status ${app.status.toLowerCase()}`}>
{app.status}
</span>

<button className="review">Review</button>

<button className="schedule">
Schedule Interview
</button>

</div>

</div>

))}

</div>

)

}8