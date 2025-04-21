const mongoose= require("mongoose")

const connection = (connectionString)=>{
       return  mongoose.connect(connectionString)
}

module.exports=connection