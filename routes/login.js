const express=require('express');
const router=express.Router();
const fs=require('fs-extra');
const User=require('../models/User');

router.post('/:postId',async(req,res)=>{
    try{
        const user=await User.findOne({
            name:req.params.postId
        })
        console.log(req.body.pw,user.pw)
        if(req.body.pw===user.pw){
            res.send(user._id)
        } else {
            res.send(false)
        }
    } catch(err){
        var tok=false
        res.send(tok);
    }
})

router.get('/:postId',async(req,res)=>{
    try{
        const user=await User.findOne({
            _id:req.params.postId
        })
        res.send(user);
    } catch(err){
        console.log('err',err)
    }
})

router.patch('/:postId',async(req,res)=>{
    try{
        const changeVal= await User.findByIdAndUpdate(
            req.params.postId,
            req.body,
            {new:true}
        );
        const changed=await New.find();
        res.json(changed);
    } catch(err) {
        res.json(err);
    }
})

router.delete('/:postId', async (req,res)=>{
    console.log(req.body);
    try{
        const removeUser= await User.remove({_id:req.params.postId})
        res.json(removeUser)
    } catch(err) {
        res.json(err);
    }
})

module.exports=router