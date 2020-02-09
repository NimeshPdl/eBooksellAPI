const express = require('express');
const router =express.Router();
const book = require('../models/book');
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

router.delete('/:bookId',(req,res,next)=>{
    book.remove({_id: req.params.bookId})
        
    .then((callback)=>{
        res.json({status:"Fictional images deleted"})
        console.log(callback);
    }).catch(next);
});
module.exports=router;