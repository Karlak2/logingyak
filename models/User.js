const mongoose=require('mongoose');


const newUser=mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pw:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('users' , newUser);