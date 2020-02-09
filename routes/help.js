const express = require('express');
const router =express.Router();
const help = require('../models/help');
const auth = require('../auth');    

router.post('/create',(req,res,next)=>{
    help.create({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        issue:req.body.issue
    }).then((callbacks)=>{
        res.json( {status:"item created successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);
});

router.get('/all',(req,res,next)=>{
    // book.find({},(err,callback)=>{
    //     if(err){
    //         let err = new Error('Error finding items');
    //             err.status = 401;
    //             return next(err);
    //     }
    //     res.json(callback)
    // });
    help.find({})
    .then((callbacks)=>{
        res.json(callbacks);
    })
    .catch((err)=>{
        res.send(err)
    })
});
module.exports=router;