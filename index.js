const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors =require('cors');
const app = express();

//init db
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/AnimaliaPro")
.then(()=> {
    console.log("connected")
 },(error)=>{
     console.log("ERROR FOUND => "+error);
     throw new error("Not Connected")
 }).catch(()=>0);

app.use(bodyParser.json());
app.use(cors({origin: '*'}));
var DEFAULT_PORT = 3000;
var port         = DEFAULT_PORT;
var maybe_port = process.env.PORT;
if( typeof maybe_port === "number" ){
    port = maybe_port;
}

app.get('/', async (req,res)=>{
    res.send("Correct host")
});
app.post('/login', async (req,res)=>{
    console.log("petition recieved");
    const user = require('./domain/user');
    const {name,password} = req.body;
    toResp = await user.findOne({name,password});
    if (!toResp){
        console.log("!resp");
        res.header(status,402);
        res.end("Username or password incorrect");
    }else{
        console.log("resp")
        res.end("Username or password correct");
    }
});

app.get('/login', async (req,res)=>{
    res.send("trying")
});

app.listen(port,"0.0.0.0", ()=>console.log("port is "+port));