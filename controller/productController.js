const products = require("../models/productModel")



exports.allProductController=async(req,res)=>{
    try {
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.oneProductController=async(req,res)=>{
    const {id} =req.params
    try {
        const product =await products.findOne({id})
        res.status(200).json(product)
    } catch (error) {
        res.status(401).json(error)
    }
}