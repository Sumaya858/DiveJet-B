const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    title: {type: String},
    email: {type: String,
        required: true,
        lowercase: true
        
    },
    description: {type: String},
}, {
    timestamps: true
});



const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact