const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    bookname: {
        type: String
    },
    price: {
        type: String
    
    },
    billingaddress: {
        type: String
    },
    billingnumber: {
        type: String
    },
    ordernumber: {
        type: String
    },
    dispatched:Boolean

}
);

module.exports = mongoose.model('order', orderSchema);