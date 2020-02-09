const mongoose = require("mongoose");

const cart = new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    detail:{
        type:String,
    
    },
    book_category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    }
});
module.exports = mongoose.model('cart',cart);