const coursesMod = require('../models/courses')
const levelMod = require('../models/level')



exports.courses_add_get = async (req,res) => {

    try{
    const levels = await levelMod.find()
    // console.log("countries", countries)

    res.render('courses/add', {levels})
    // res.render('courses/add')
    } catch(err){
        res.send(err.message)
    }
}

exports.courses_add_post = (req,res) => {
    console.log(req.body)           
    const courses = new coursesMod(req.body)
    // console.log(req.user)
    // courses.user = req.user._id                         //save user id with the courses form 
    courses.save()
        .then(() => {   
            console.log('Your courses has been saved !!')
            // res.redirect('/courses/all')
        })
        .catch((err) => {
            console.log('an Error Occurred',err)
        })
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



// exports.update_courses_get = async (req,res) => {
//     try{
//         const courses = await coursesMod.findById(req.query.id).populate('level') 
//         const countries = await countryMod.find()

//         res.render('courses/update', {courses, countries})
//     } catch(error){
//         res.send(error.message)
//     }
// }



// exports.update_courses_post = async (req,res) => {
//     try{
//         console.log(req.body.id)
//         await coursesMod.findByIdAndUpdate(req.body.id , req.body).populate('level')
//         res.redirect('/courses/all')
//     } catch(error){
//         res.send(error.message)
//     }
// }
















