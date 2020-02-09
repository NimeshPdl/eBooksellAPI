const express = require('express');
const router =express.Router();
const book = require('../models/book');
const order = require('../models/order');
const auth = require('../auth');    

router.post('/addorder',(req,res,next)=>{
    console.log(req.body)
    order.create({
        userId: req.body.userId,
        billingaddress: req.body.billingaddress,
        billingnumber: req.body.billingnumber,
        price: req.body.price,
        bookName: req.body.bookName,
        ordernumber: req.body.ordernumber,
        dispatched: false

    }).then((callbacks)=>{
        res.json( {status:"item created successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/getorder', (req, res, next) => {
    order.find()
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/orderget/:id', function (req, res, next) {
    order.find
        ({ ordernumber: req.params.id }).
        then(Order)
    {
        if (Order.dispatched == null) {
            res.send({ status: "dispatched" })
        }
        else {
            res.send({ status: "notdispatched" })
        }
    }

})

router.put('/updateorder/:id', (req, res, next) => {
    console.log(req.params.id + "is order id")
    console.log(req.body.dispatched)
    order.findByIdAndUpdate(req.params.id,
        { $set: req.body }, { new: true })
        .then((order) => {

            res.json({ status: "Success" });
        })
});

module.exports = router;