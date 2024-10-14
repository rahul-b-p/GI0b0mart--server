const express = require('express')

const router = new express.Router()

const productController = require('./controller/productController')
const userController = require('./controller/userController')
const wishlistController = require('./controller/whishlistController')
const cartController = require('./controller/cartController')
const jwt = require('./middleware/jwtMiddleware')


router.get('/all-product', productController.allProductController)
router.get('/getproduct/:id',productController.oneProductController)

router.post('/register',userController.registerController)
router.post('/login',userController.loginController)

router.post('/add-wishlist',jwt,wishlistController.addToWishlistController)
router.get('/wishlist-items',jwt,wishlistController.getItemFromWishlistController)
router.delete('/wishlist-remove/:id',wishlistController.removeFromWishlistController)

router.post('/add-cart',jwt,cartController.addToCartController)
router.get('/get-cart',jwt,cartController.getCartItemsControllrer)
router.delete('/delete-cart-item/:id',cartController.removeCartItemController)
router.get('/inc-item/:id',cartController.incermentItemController)
router.get('/dec-item/:id',cartController.decermentItemController)
module.exports = router