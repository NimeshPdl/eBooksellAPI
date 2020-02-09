const mongoose = require("mongoose");

const helpSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    issue:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('help',helpSchema);