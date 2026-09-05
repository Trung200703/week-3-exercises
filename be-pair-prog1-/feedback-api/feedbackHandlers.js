const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    const feedbacks = Feedback.getAll();
    res.json(feedbacks);
};

const createFeedback = (req, res) => {
    const { sender, message, rating, platform } = req.body;
    const newFeedback = Feedback.addOne (sender, message, rating, platform);
    if (newFeedback) {
    res.status(201).json(newFeedback);
  } else {
    res.status(500).json({ message: "Failed to create feedback" });
  }
};

const getFeedbackById = (req, res) => {
    const feedbackId = req.params.feedbackId;
    const feedback = Feedback.findById(feedbackId);

    if (feedback) {
      res.json(feedback);
    } else {
      res.status(404).json({ message: "Feedback not found" });
    }
}


const updateFeedback = (req, res) => {
    const feedbackId = req.params.feedbackId;
    const {sender, message, rating, platform} = req.body;
    const updatedFeedback = Feedback.updateById(feedbackId, {sender, message, rating, platform});
    
    if (updatedFeedback) {
      res.json(updatedFeedback);
    } else {
      res.status(404).json({ message: "Feedback not found" });
    }
}

const deleteFeedback = (req, res) => {
    const feedbackId = req.params.feedbackId;
    const deleted = Feedback.deleteOneById(feedbackId);
    if (!deleted) {
        return res.status(404).json({ message: "Feedback not found" });
    }

    res.status(204).send();

};

module.exports = { getAllFeedbacks,
createFeedback,
getFeedbackById,
updateFeedback,
deleteFeedback, 
};