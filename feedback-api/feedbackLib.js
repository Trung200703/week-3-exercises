let feedbackArray = [];
let nextId = 1;

function addOne(sender, message, rating, platform) {
    if (!sender || !message || !rating || !platform) {
        return false;
    }

    const newFeedback = {
        id: nextId++,  
        sender,
        message,
        rating,
        platform
    };

    feedbackArray.push(newFeedback); 
    return newFeedback; 
}

function getAll() {
    return feedbackArray;
}

function findById(id) {
    const numericId = Number(id); 
    const feedback = feedbackArray.find(item => item.id === numericId);  
    return feedback || false; 
}

function updateOneById(id, updatedData) {
    const feedback = findById(id);
    if (feedback) {
        
        if (updatedData.sender) feedback.sender = updatedData.sender;
        if (updatedData.message) feedback.message = updatedData.message;
        if (updatedData.rating) feedback.rating = updatedData.rating;
        if (updatedData.platform) feedback.platform = updatedData.platform;
        return feedback; 
    }
    return false; 
}

function deleteOneById(id) {
    const feedback = findById(id);
    if (feedback) {
        feedbackArray = feedbackArray.filter(item => item.id !== Number(id));
        return true;
    }
    return false; 
}

const Feedback = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Feedback;

if (require.main === module) {
 let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 5, "mobile");
 console.log(result);
 console.log("getAll called:", getAll());
 console.log("findById called:", findById(1));
 // rest of the tests here
}