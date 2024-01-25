const { dataModel } = require("../model/Product.Model")



const productController ={
    getAll:async(req,res)=>{
        try{
            const product= await dataModel.find()
            res.status(200).send(product)
        }catch(error){
            res.status(404).send("error")
        }
    }
    ,

    getById:async(req,res)=>{
        try{
            const {id}=req.params
            const target = await dataModel.findById(id)
            res.status(200).send(target)
        }catch(error){
            res.status(404).send("error")
        }
    },

    delete:async(req,res)=>{
        try{
            const {id}=req.params
            const deletedData= await dataModel.findByIdAndDelete(id)
            res.send(deletedData)
        }catch(error){
            res.status(404).send("error")
        }
    },


    add:async(req,res)=>{
        try{
            const {img,title,desc,price}=req.body
            const newData= await dataModel({img,title,desc,price})
            await newData.save()
            res.status(200).send(newData)
        }catch(error){
            res.status(404).send("error")
        }
    }
}

module.exports={productController}