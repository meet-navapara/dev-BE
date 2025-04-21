const express = require("express");
const  connection = require("./connection/connetion");
const productRouter = require("./routes/product.routes");
require('dotenv').config();

const app = express()
app.use(express.json())


app.use("/product",productRouter)

const connect = async ()=>{
     app.listen(4000,()=>{
            console.log("app is running on 4000");
    })
    await connection(process.env.URL)
}
connect()


