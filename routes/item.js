const express = require('express')
const router = express.Router()
const itemCtrl = require('../controllers/item')

router.get('/rent-item', itemCtrl.item_index_get)
router.post('/add-item', itemCtrl.item_add_post)

module.exports = router