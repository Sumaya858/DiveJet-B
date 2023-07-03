const Item = require('../models/Item')

const item_index_get = async (req, res) => {
    try{
        const allItems = await Item.find({}, 'itemName itemPrice')
        res.status(200).json(allItems)
    }catch(error){
        res.status(500).json(error)
    }
}

const item_add_post = async (req, res) => {
    try{
        const newItem = new Item(req.body)
        await newItem.save()
        res.status(201).json({
            message: "item has been created successfully",
            created: newItem
        })
    }catch(error){
        res.status(500).json(error)
    }
}


module.exports = {
    item_index_get,
    item_add_post
}