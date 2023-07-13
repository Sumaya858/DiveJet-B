// const express = require('express');
// const router = express.Router();
// const feedbackController = require('../controllers/feedback');

// router.get('/feedback', (req, res) => {
//     res.render('feedback');
// });
// router.post('/feedback', feedbackController.create);



// module.exports = router;

const Feedback = require('../models/feedback')
const feedback_index_get = async (req, res) => {
    try {
        const AllFeedbacks = await Feedback.find({}, 'title')
        res.status(200).json(AllFeedbacks)
    } catch (error) {
        res.status(500).json(error)
    }
}
const feedback_add_post = async (req, res) => {
    try {
        const newFeedback = new FeenewFeedback(req.body)
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



const express = require('express')
const router = express.Router()
const feedbackControllers = require('../controllers/feedback')
//Routes here
router.get('/feedback/index', feedbackControllers.feedback_index_get)
router.post('/feedback/add', feedbackControllers.feedback_add_post)


//exports
module.exports = router