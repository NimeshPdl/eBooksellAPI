const mongoose = require('mongoose');

const mainsliderSchema = new mongoose.Schema({
    bookName:{
        type:String
    },
    images:{
        type:String
    },
    descriptions:{
        type:String
    }

});
module.exports = mongoose.model('mainslider',mainsliderSchema);