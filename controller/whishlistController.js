const wishes = require("../models/whishlistModel")


exports.addToWishlistController = async (req, res) => {

    const { id, title, price, description, category, image, rating } = req.body
    const userId = req.payload

    try {
        const existingProduct = await wishes.findOne({ id, userId })
        if (existingProduct) {
            res.status(406).json('Product already added')
        }
        else {
            const newProduct = new wishes({
                id, title, price, description, category, image, rating, userId
            })
            await newProduct.save()
            res.status(200).json(newProduct)
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getItemFromWishlistController = async (req, res) => {
    const userId = req.payload

    try {
        const userWishListItems = await wishes.find({ userId })
        res.status(200).json(userWishListItems)
    } catch (error) {
        res.status(401).json(error)
    }
}

exports.removeFromWishlistController = async (req, res) => {
    const {id} = req.params

    try {
        await wishes.deleteOne({_id:id})
        res.status(200).json('Deleted Successfully')
    } catch (error) {
        res.status(401).json(error)
    }
}