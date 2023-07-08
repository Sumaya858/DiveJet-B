const coursesMod = require('../models/courses')
const LevelMod = require('../models/level')
const levels = require('../models/levalOfCourse')
const User = require('../models/User')



exports.courses_add_get = async (req,res) => {

    try{
    // const levels = await LevelMod.find()
    // res.render('courses/add', {levels})

    res.render('courses/add')
    } catch(err){
        res.send(err.message)
    }
}

exports.courses_add_post = async (req,res) => {
    console.log(req.body.level)
    const level = await LevelMod.find({name : req.body.level})
    // const level = await LevelMod.findById(req.query.level)
    console.log(level)
    const user = req.user.id


 
    const courses = new coursesMod()

    // user._id, level[0]._id
    // const courses = await User.find().populate('level')
    courses.user =user 
    courses.level = level[0]._id

    courses.save()
        .then(() => {   
            console.log('Your courses has been saved !!')
            res.status(201).json(courses)
        })
        .catch((err) => {
            console.log('an Error Occurred',err)
        })






    // console.log(req.body)           
    // const courses = new coursesMod(req.body)
    // console.log(req.user)
    // courses.user = req.user._id                         //save user id with the courses form 

}





// exports.all_courses_get = async (req,res) => {
//     try {
//         const courses = await coursesMod.find({user:req.user._id}).populate('level')
//         console.log(courses)
//         res.render('courses/all', { courses}) 
//     } catch (error){
//         res.send(error.message)
//     }
// }


// exports.delete_courses_post = async (req,res) => {
//     console.log(req.query.id)
//     try {
//     await coursesMod.findByIdAndDelete(req.query.id)
//     res.redirect('/courses/all')
//     } catch(error) {
//         res.send(error.message)
//     }
// }














//push the data from js file to the DB

exports.level_get = async (req, res) =>{

    // forEach on levels
    // const level = new LevelMod(element)
    // await level.save()

    levels.forEach( async (element) => {
        const level = new LevelMod(element)
        await level.save()
    })

    res.render('level/insert')
}
