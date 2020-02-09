const express= require('express');
const router = express.Router();
const banneritem= require('../models/mainslider');
const auth= require('../auth');

router.get('/all',(req,res,next)=>{
    banneritem.find({},(err,callback)=>{
        if(err){
            let err = new Error("Error retrieving Banner images");
            err.status=401;
            return next(err);
        }
        res.json(callback);
        console.log(callback);
    })
});

router.post('/create',(req,res,next)=>{
    banneritem.create({
        bookName:req.body.bookName,
        images:req.body.images,
        descriptions:req.body.descriptions
    }).then((callback)=>{
        res.json({status:"banner images saved"})
        console.log(callback);
    }).catch(next);
});

router.delete('/:bannerId',(req,res,next)=>{
    banneritem.remove({_id: req.params.bannerId})
        
    .then((callback)=>{
        res.json({status:"banner images deleted"})
        console.log(callback);
    }).catch(next);
});
module.exports=router;