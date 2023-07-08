const mongoose = require('mongoose');
const { strategies } = require('passport');


const coursesgSchema = mongoose.Schema({
    user:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'    
        } ,
    level:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level'    
   
    }]
})


const Courses = mongoose.model('Courses',coursesgSchema )

module.exports = Courses;
