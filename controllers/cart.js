const Item = require("../models/Item")

const cart_index_get = async (req, res) =>{
    try{
        const cartItems = await Item.find(req.query.id).populate('item')   // {user:req.user._id} is for getting the data only related to that user
        console.log(cartItems)
        res.status(200).json(cartItems)
    }catch(error){
        res.status(500).json(error)
    }

}


// const cart_add_post = async (req, res) => {
//     try{
        
//     }catch(error){
//         res.status(500).json(error)
//     }
// }

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
    cart_delete_post
}
