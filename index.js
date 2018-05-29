const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

//init db
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/AnimaliaPro")
.then(()=> {
    console.log("connected")
 },(error)=>{
     console.log("ERROR FOUND => "+error);
 })

app.use(bodyParser.json());

app.post('/login', async (req,res)=>{
    const user = require('./domain/user');
    const {name,password} = req.body;
    toResp = await user.findOne({name,password});
    if (!toResp){
        res.header(status,301)
        res.send("Username or password incorrect")
    }else{
        res.send(toResp);
    }
});

app.get('/login', async (req,res)=>{
    res.send("Correct")
});

app.listen(8082,'0.0.0.0',()=>console.log("server listening on 8082"));