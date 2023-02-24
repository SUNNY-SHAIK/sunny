import {useState} from 'react'
import axios from 'axios'
function Contact(){
	const [firstname,setFirstname]=useState(" ")
	const [lastname,setLastname]=useState(" ")
	const [username,setUsername]=useState(" ")
	const [password,setPassword]=useState(" ")
	const [email,setEmail]=useState(" ")

	function add(){
		axios.post("http://localhost:4000/add" ,{
			firstname:firstname ,
			lastname:lastname ,
			username:username ,
			password:password ,
			email:email
		})
	}
	return(
		 <div>

		 	<center>
		     <div class="logo"> <img src="data:image/png;base64,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" width="80px" height="80px"/></div>
			<h3> Sign up</h3>
			<h5>to create your first </h5>
			<form action="" onsubmit="return convertURL(this);">
				<input placeholder="firstname"  onChange ={(e)=>setFirstname (e.target.value)} /><br/>
				<input placeholder="lastname"  onChange ={(e)=>setLastname (e.target.value)} /><br/>
				<input placeholder="username"  onChange ={(e)=>setUsername (e.target.value)} /><br/>
				<input placeholder="password"  onChange ={(e)=>setPassword (e.target.value)} /><br/>
				<input placeholder="email"  onChange ={(e)=>setEmail (e.target.value)} /><br/>
				
			<button onClick={add}>Sign Up </button><a href="/home"><h3>Finish to Log in</h3></a>
			<h6>By tapping Sign Up & Accept, you acknowledge that you have read the Privacy Policy <br/>and agree to the Terms of Service. Snapchatters can always capture or save<br/> your messages, such as by taking a screenshot or using a camera.<br/> Be mindful of what you Snap!</h6>

			
			</form>
			  
			</center>	  
		  </div>
		)
}

export default Contact;