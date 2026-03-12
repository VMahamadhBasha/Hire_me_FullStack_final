import React from "react";
import "./PostJob.css";

export default function PostJob(){

return(

<div className="post-job">

<h2>Post a New Job</h2>

<form>

<input placeholder="Job Title" />

<input placeholder="Company Name" />

<input placeholder="Location" />

<select>
<option>Full Time</option>
<option>Part Time</option>
<option>Contract</option>
</select>

<textarea placeholder="Job Description"></textarea>

<button type="submit">Post Job</button>

</form>

</div>

)

}