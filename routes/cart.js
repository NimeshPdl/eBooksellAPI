const express = require('express');
const mongoose = require('mongoose');
const Cart = require('../models/cart');
const router = new express.Router();
const bodyParser = require('body-parser');
var app = express();
const book = require('../models/book');
const auth = require('../auth')

router.get('/', function (req, res) {
    Cart.find()
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
router.post('/addcart',auth.verifyUser, (req, res, next) => {
    Cart.create({
        bookId : req.body.bookId,
        userId : req.user._id
    }).then((cart) => {
        console.log(req.body);
        res.json(cart);
    }).catch(next);
});


router.delete('/deletecart/:id', function (req, res) {
    cart.findByIdAndDelete(req.params.id, req.body, function (err, register) {
        if (err) return next(err);
        res.json(register);
    });
});


router.post("/checkcart", function (req, res) {
    console.log(req.body.bookId + "is prodict id ");
    console.log(req.body.userId + "is user id ")
    // { bookId: req.body.bookId, userId: req.body.userId }
    const pp = cart.find().countDocuments().then(function (count) {
        if (count == 0) {
            res.send({ status: "addhere" });
        }
        else {
            res.send({ status: "cantadd" });
            
        }
    })
});

router.get('/checkcart', require("../auth").verifyUser, function (req, res) {
    Cart.find({userId:req.user._id}).populate("bookId")
        .exec()
        .then(docs => {
            // console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


router.get("/checkcart90", function (req, res) {
    const pp = cart.find({ bookId: req.body.bookId, userId: req.body.userId }).countDocuments().then(function (count) {
        if (count == 0) {
            res.send({ status: "Your List" });
        }
        else {
            res.send({ status: "Not Found" });
        }
    })
})



router.get("/checkcart1/:id", auth.verifyUser, function (req, res) {
    console.log(req.params.id);
    console.log(register._id)
    const pp = cart.find({ bookId: req.params.id, userId: req.register._id }).countDocuments().then(function (count) {
        if (count == 0) {
            res.send({ status: "addhere" });
        }
        else {
            res.send({ status: "cantadd" });
        }
    })
})

router.get('/check/:id', (req, res, next) => {
    cart.find({ userId: req.params.id }).then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})
router.route('/cartsitem')
    .get((req, res, next) => {
        cart.find({ userId: req.cart.userid })
            .then((tasks) => {
                res.json(tasks);
            }).catch((err) => next(err));
    })

module.exports = router;