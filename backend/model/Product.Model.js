const mongoose=require("mongoose")


const dataModel= mongoose.model("data",new mongoose.Schema({
    img:String,
    title:String,
    desc:String,
    price:Number
}))


module.exports = {dataModel}