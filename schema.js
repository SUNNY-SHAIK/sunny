const mongoose =require("mongoose")

const contentschema={
	username:string , 
	password:string
}

const content = mongoose.model(user,"contentschema")

module.exports=contentschema