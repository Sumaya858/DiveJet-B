const mongoose = require('mongoose')

const levelSchema = mongoose.Schema({
  name:{type: String, required: true},
  from: {type: String, required: true},
  to: {type: String, required: true},
  deep: {type: String, required: true}
})



const Level = mongoose.model('Level', levelSchema)

module.exports = Level;