const express=require("express")
require("dotenv").config()
const mongoose=require("mongoose")
const cors=require("cors")
const router = require("./routes/Product.routes")

const app=express()
const Port = process.env.PORT || 8085

app.use(express.json())
app.use(cors())
app.use("/datalarim", router)

mongoose.connect("mongodb+srv://djafarlees:CeferliNesibe17@djafarlees.gmmjpxn.mongodb.net/").then((res)=>{
    console.log("connected")
})

app.listen(Port,()=>{
    console.log("app running")
})
