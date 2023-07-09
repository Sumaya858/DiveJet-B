const express = require('express')
const router = express.Router()
const contactControllers = require('../controllers/contact')

//Routes here
router.get('/contact/index', contactControllers.contact_index_get)
router.post('/contact/add', contactControllers.contact_add_post)
//exports
module.exports = router