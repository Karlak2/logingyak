const express=require('express');
const app=express();
const fs=require('fs-extra');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();


app.use(bodyParser.json());
const user=require('./routes/registration')
const logged=require('./routes/login')
app.use('/registration',user)
app.use('/login',logged)

app.use(express.static('public'));
app.get('/', async (req,res)=>{
    try{
        const ind= await fs.readFile('index.html','utf-8');
        res.send(ind);
    } catch(err){
        console.log(err);
    }
});

mongoose.connect(process.env.DB_CONNECTION,
    ()=>{
        console.log("CONNECTED DB");
    });



app.listen(3000);