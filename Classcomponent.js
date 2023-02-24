import React from 'react'

class Classcomponent extends React.Component{
	state={
		userdata:""
	
	}
	handleChange=(e)=>{
		this.setState({
			userdata:e.target.value
		})
	}
	handleClick=()=>{
		console.log(this.state.userdata);
		this.setState({
			userdata:""
		})
	}
	render(){
		return(
			  <div>
			  </div>
			)
	};
}
export default Classcomponent;