const feedback = require('../models/feedback')

const feedback_index_get = async (req, res) => {
    try {
        const AllFeedbacks = await feedback.find()
        res.status(200).json(AllFeedbacks)
    } catch (error) {
        res.status(500).json(error)
    }
}
const feedback_add_post = async (req, res) => {
    try {
      console.log("req.body")
      console.log(req.body)
        const newFeedback = new feedback(req.body)
        await newFeedback.save()
        res.status(201).json({
            message: "yes, it's saved!",
            created: newFeedback
        })
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = {
    feedback_add_post,
    feedback_index_get,
}

