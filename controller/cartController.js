const carts = require("../models/cartModel")
const { deleteOne } = require("../models/productModel")


exports.addToCartController = async (req, res) => {
    const { id, title, price, description, category, image, rating } = req.body
    const userId = req.payload

    try {
        const existingProduct = await carts.findOne({ id, userId })
        if (existingProduct) {
            res.status(406).json('Product already in your cart')
        }
        else {
            const newProduct = new carts({
                id, title, price, description, category, image, rating, userId, quantity: 1, grandTotal: price
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.getCartItemsControllrer = async (req, res) => {
    const userId = req.payload

    try {
        const userCartItems = await carts.find({ userId })
        res.status(200).json(userCartItems)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.removeCartItemController = async (req, res) => {
    const { id } = req.params
    try {
        await carts.deleteOne({ _id: id })
        res.status(200).json('Deleted successfully')
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.incermentItemController = async (req, res) => {
    const { id } = req.params

    try {
        const existingProduct = await carts.findOne({ _id: id })
        if (existingProduct) {
            existingProduct.quantity += 1
            existingProduct.grandTotal = existingProduct.price * existingProduct.quantity
            await existingProduct.save()
            res.status(200).json(existingProduct)
        }
        else {
            res.status(401).json('Not an existing Product')
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.decermentItemController = async (req, res) => {
    const { id } = req.params

    try {
        const existingProduct = await carts.findOne({ _id: id })
        if (existingProduct) {
            if (existingProduct.quantity <= 1) {
                await carts.deleteOne({_id:id})
                res.status(200).json('Item Removed')
            }
            else {
                existingProduct.quantity -= 1
                existingProduct.grandTotal = existingProduct.price * existingProduct.quantity
                await existingProduct.save()
                res.status(200).json(existingProduct)
            }
        }
        else {
            res.status(401).json('Not an existing Product')
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.emptyClassController =async (req,res) =>{
    const userId = req.payload

    try {
        
    } catch (error) {
        res.status(401).json(error)
    }
}