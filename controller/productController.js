const product = require('../model/product');
const helper = require("express-async-handler")


const addProduct = helper(async(req,res,next)=>{
    const {name,image,price,quantity,color}= req.body;
    const item = await product.create({name,image,price,quantity,color})

    if(product){
        res.status(200).json({error:false,message:"Product added successful",data:item})
    }
})


const fetchProduct = helper(async(req,res,next)=>{
    const items = await product.find()
    if(items)
    {
        res.status(200).json({error:false,message:"Product fetched successful",data:items})

    }
})

const updateProduct = helper(async(req,res,next)=>{
    const { id} = req.params
    const {name,image,price,quantity,color}= req.body;
    const item = await product.findByIdAndUpdate({_id:id},{name,image,price,quantity,color})
    if(item)
    {
        res.status(200).json({error:false,message:"Product updated successful",data:item})

    }
})

module.exports = {addProduct,fetchProduct,updateProduct}