// routes/profile.js

const express = require('express');
const router = express.Router();
const isLoggedIn = require('../lib/isLoggedIn')
const profileController = require('../controllers/profile');

router.get('/profile/view' , isLoggedIn , profileController.view_profile_get)
router.get('/courses/index', isLoggedIn, profileController.course_index_get)
router.post('/course/delete', profileController.course_delete)


module.exports = router;


