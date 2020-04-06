const express=require('express');
const router=express.Router();
const fs=require('fs-extra');
const User=require('../models/User');

router.get('/',async(req,res)=>{
    try{
        const page=await fs.readFile('views/user.html','utf-8')
        res.send(page)
    } catch(err){
        var tok=false
        res.send(tok);
    }
})

router.get('/:postId',async(req,res)=>{
    try{
        const user=await User.findOne({
            name:req.params.postId
        })
        if(user===null){
            var tok=false
            res.send(tok);
        }
        res.send('error');
    } catch(err){
        console.log('err',err)
    }
})

router.post('/',async(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        pw:req.body.pw
    })
    try{
        const saveUser=await user.save()
        res.send(saveUser);
        console.log(saveUser)
    } catch(err){
        console.log(err);
    }
})


module.exports=router