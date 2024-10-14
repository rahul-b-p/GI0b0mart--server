const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        rate: {
            type: Number,
            required: true
        },
        count: {
            type: Number,
            required: true
        }
    },
    quantity:{
        required: true,
        type: Number
    },
    grandTotal:{
        required: true,
        type: Number
    },
    userId: {
        required: true,
        type: String
    }
})

const carts = mongoose.model("carts", cartSchema)

module.exports = carts