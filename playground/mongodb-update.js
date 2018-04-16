//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5ad4c2130cbbe4808b602604")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db
    .collection("Users")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5ad0c31afcc4140cd0e872e6")
      },{
        $set: {
          name: "Vincent"
        },
        $inc: {
          age: 1
        }
      },{
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });

  //db.close();
});
