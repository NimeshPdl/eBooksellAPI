const express = require('express');
const mongoose = require('mongoose');
const Cart = require('../models/cart');
const router = new express.Router();
const bodyParser = require('body-parser');
var app = express();
const book = require('../models/book');
const auth = require('../auth')

router.get('/', function (req, res) {
    cart.find()
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
router.post('/addcart', (req, res, next) => {
    console.log(req.body);
    cart.create({
        bookId: req.body.userId,
        userId: req.body.userId,
        price: req.body.price,
        bookname: req.body.bookname,
        detail: req.body.detail,
        book_category: req.body.book_category
    }).then((cart) => {
        console.log(req.body);
        res.json({ status: "Cart Added!" });
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
    const pp = Cart.find({ bookId: req.body.productid, userid: req.body.userid }).countDocuments().then(function (count) {
        if (count == 0) {
            res.send({ status: "addhere" });
        }
        else {
            res.send({ status: "cantadd" });
        }
    })
})



router.post("/checkcart90", function (req, res) {
    const pp = cart.find({ bookId: req.body.bookId, userId: req.body.userId }).countDocuments().then(function (count) {
        if (count == 0) {
            res.send({ status: "addhere" });
        }
        else {
            res.send({ status: "cantadd" });
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