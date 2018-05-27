var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/AnimaliaPro", function(err, client) {
  if(!err) {
    console.log("We are connected");
    var db = client.db('AnimaliaPro');
    var collection = db.collection('user');
    var lotsOfDocs = [{ 'name': 'test1', 'password':'1234','role':1 }, { 'name': 'test2', 'password':'1234', 'role':2 }];

    collection.insert(lotsOfDocs, { w: 1 }, function (err, result) {
        if(err){
            console.log("error:  "+ err.message);
        }
     });

    client.close();


  }
  else {
      console.log(err);
  }
});