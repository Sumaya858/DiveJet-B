const Item = require("../models/Item")

const cart_index_get = async (req, res) =>{
    try{
        const cartItems = await Item.find(req.query.id).populate("item")  
        console.log(cartItems)
        res.status(200).json(cartItems)
    }catch(error){
        res.status(500).json(error)
    }

}


const cart_add_post = async (req, res) => {
    try{
        const cartItem =  Item(req.query.id)
        await cartItem.save()
        res.status(200).json({
            message: "item has been added successfully",
            created: cartItem
        })
    }catch(error){
        res.status(500).json(error)
    }
}

const cart_delete_post = async (req, res) => {
    try{
        await Item.findByIdAndDelete(req.query.id) 
        res.status(200).json({
            message: "item has been removed successfully"
        })
    }catch(error){
        res.status(500).json(error)
    }
}


module.exports = {
    cart_index_get,
    cart_delete_post,
    cart_add_post
}
