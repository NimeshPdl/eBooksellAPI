const mongoose = require("mongoose");

const cart = new mongoose.Schema({
    bookId:{      
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book'
    },
    userId:{   
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
module.exports = mongoose.model('cart',cart);