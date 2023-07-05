const mongoose = require('mongoose');
const { strategies } = require('passport');


const coursesgSchema = mongoose.Schema({
    user:  {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'    
        } ,
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    age:{type: Number, required: true},
    email: {type: String, required: true},
    mobile:{type: Number, required: true},
    // chronicdisease: {type: Boolean, required: true},
    level:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level'    
   
    }]
})


const Courses = mongoose.model('Courses',coursesgSchema )

module.exports = Courses;
