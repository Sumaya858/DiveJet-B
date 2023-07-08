const express = require('express')
const router = express.Router()
const cartCtrl = require('../controllers/cart')

router.get("/cart", cartCtrl.cart_index_get)
// router.post("/add-to-cart", cartCtrl.cart_add_post)
router.post("/remove-cart-item", cartCtrl.cart_delete_post)

module.exports = router