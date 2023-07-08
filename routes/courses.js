const express=require('express')
const router = express.Router()

const coursesCtrl = require('../controllers/courses')
const isLoggedIn=require('../lib/isLoggedIn')


router.get('/courses/add' ,coursesCtrl.courses_add_get)
router.post('/courses/add', isLoggedIn ,coursesCtrl.courses_add_post)
// router.get('/courses/all',  coursesCtrl.all_courses_get)
// router.post('/courses/delete',  coursesCtrl.delete_courses_post)
// router.get('/courses/update',  coursesCtrl.update_courses_get)
// router.post('/courses/update',  coursesCtrl.update_courses_post)


router.get('/level/insert',coursesCtrl.level_get)




module.exports=router;