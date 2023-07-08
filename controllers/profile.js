const User = require('../models/User')
const Course = require('../models/courses')
const LevelMod = require('../models/level')



    exports.view_profile_get = async (req,res) => {
        try {
            console.log(req.user)
            const profile = await User.findById(req.user.id) //{} will return every field, or you can specify by writing after comma, and if you want more than one, just add after space . ex Todo.find({},'title description')
            res.status(200).json(profile)
        } catch (error) {
            res.status(500).json(error)
        }
  }







  exports.course_index_get = async (req, res) => {
    try{
        console.log(req.user)
        const courses = await Course.find({user: req.user.id}).populate('level')
        // console.log(courses)
        // const level = await LevelMod.find(courses.level).populate('level')
        console.log("heeeereee",courses)

        // console.log(courses)
        if (courses.length){
            res.status(200).json(courses)
        }else{
            console.log('in else block')
            res.sendStatus(404)
        }
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}