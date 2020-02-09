const express = require('express');
const router =express.Router();
const book = require('../models/commingnew');
const auth = require('../auth');    

router.post('/create',(req,res,next)=>{
    book.create({
        bookname:req.body.bookname,
        price:req.body.price,
        detail:req.body.detail,
        book_category:req.body.book_category,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"item created successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{

    book.find({})
    .then((callbacks)=>{
        res.json(callbacks);
    })
    .catch((err)=>{
        res.send(err)
    })
});
module.exports=router;