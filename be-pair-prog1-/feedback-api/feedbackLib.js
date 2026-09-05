let FeedbackArray = [];
let nextId = 1;

// Create
function addOne(sender, message, rating, platform) {
    if (!sender || !message || rating < 1 || rating > 5 || !platform) {
        return false;
    }

const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating,
    platform,
};

FeedbackArray.push(newFeedback);
return newFeedback;
}

//Get all
function getAll() {
    return FeedbackArray;
}

//Find by ID
function findById(id) {
  const feedback = FeedbackArray.find((item) => item.id == id);

  if (feedback) {
    return feedback;
  }

  return false;
}

//Update by ID
function updateById(id, updatedFeedback) {
    const feedback = findById(id);
    if (feedback) {
        if (updatedFeedback.sender) 
            {feedback.sender = updatedFeedback.sender;}

        if (updatedFeedback.message) 
            {feedback.message = updatedFeedback.message;}

        if (updatedFeedback.rating) 
            {feedback.rating = updatedFeedback.rating;}

        if (updatedFeedback.platform) 
            {feedback.platform = updatedFeedback.platform;}

        return feedback;
    }

    return false;
}

// Delete
function deleteOneById(id) {
    const feedback = findById(id);

    if (!feedback) {
        return false;
    }
    FeedbackArray = FeedbackArray.filter((item) => item.id !== Number(id));
    return true;
}


module.exports = {
    addOne,
    getAll,
    findById,
    updateById,
    deleteOneById,

};




