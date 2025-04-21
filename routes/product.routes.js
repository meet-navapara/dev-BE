const express = require('express')
const { addProduct, fetchProduct, updateProduct } = require('../controller/productController')
const productRouter = express.Router()

productRouter.post("/addProduct",addProduct)
productRouter.get("/getProducts",fetchProduct)
productRouter.patch("/updateProduct/:id",updateProduct)


module.exports=productRouter