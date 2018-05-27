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

app.listen(4444,()=>console.log("server listening on 4444"));

// Connect to the db
// MongoClient.connect("mongodb://localhost:27017/AnimaliaPro", function(err, client) {
//   if(!err) {
//     console.log("We are connected");
//     var db = client.db('AnimaliaPro');
//     var collection = db.collection('user');
//     var lotsOfDocs = [{ 'name': 'test1', 'password':'1234','role':1 }, { 'name': 'test2', 'password':'1234', 'role':2 }];

//     collection.insert(lotsOfDocs, { w: 1 }, function (err, result) {
//         if(err){
//             console.log("error:  "+ err.message);
//         }
//      });

//     client.close();


//   }
//   else {
//       console.log(err);
//   }
// });