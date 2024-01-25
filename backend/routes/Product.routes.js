const express=require("express")
const router=express.Router()
const { productController } = require("../controller/ProductController")



router.get("/", productController.getAll)
router.get("/:id", productController.getById)
router.delete("/:id", productController.delete)
router.post("/", productController.add)

module.exports= router
