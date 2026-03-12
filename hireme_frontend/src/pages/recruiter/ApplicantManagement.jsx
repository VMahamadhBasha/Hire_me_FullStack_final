import React,{useState} from "react";
import "./Styles/ApplicationManagement.css";

export default function ApplicationManagement(){

const [apps,setApps]=useState([
{name:"Varun",email:"varun@example.com",job:"Frontend Developer",date:"2026-03-10",status:"Pending"},
{name:"Tharun",email:"tharun@example.com",job:"Backend Engineer",date:"2026-03-09",status:"Reviewing"},
{name:"Lohith",email:"lohith@example.com",job:"Product Designer",date:"2026-03-08",status:"Interview"}
]);

return(

<div className="apps">

<h2>Application Management</h2>

<table>

<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Job</th>
<th>Date</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{apps.map((a,i)=>(
<tr key={i}>
<td>{a.name}</td>
<td>{a.email}</td>
<td>{a.job}</td>
<td>{a.date}</td>
<td>{a.status}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}