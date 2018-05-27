var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/AnimaliaPro", function(err, db) {
  if(!err) {
    console.log("We are connected");
    var collection = db.collection('users');
    var doc1 = { 'name': 'test1', 'password':'1234' };
    var lotsOfDocs = [{ 'name': 'test1', 'password':'1234','role':1 }, { 'name': 'test2', 'password':'1234', 'role':2 }];

    collection.insert(lotsOfDocs, { w: 1 }, function (err, result) { });

  }
  else {
      console.log(err);
  }
});