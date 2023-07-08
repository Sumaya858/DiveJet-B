const Contact = require('../models/Contact')
const contact_index_get = async (req, res) => {
    try {
        const allContactss = await Contact.find({}, 'title')
        res.status(200).json(allContacts)
    } catch (error) {
        res.status(500).json(error)
    }
}

const contact_add_post = async (req, res) => {
    try {
        const newContact = new Contact(req.body)
        await newContact.save()
        res.status(201).json({
            message: "yes, it's saved!",
            created: newContact
        })
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    contact_add_post,
    contact_index_get,
}