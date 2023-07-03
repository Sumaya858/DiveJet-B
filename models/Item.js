const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    itemImage: [{

    }],
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: String,
        required: true
    }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item