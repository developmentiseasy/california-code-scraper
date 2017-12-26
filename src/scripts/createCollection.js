const MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/dbNameHere'            //TYPE YOUR DB NAME FOR CONNECT

MongoClient.connect(url, function (err, db) {
  if (err) throw err
  db.createCollection('collectionName', function (err, res) { //TYPE YOUR collectionName FOR CREATE
    if (err) throw err
    console.log('Collection created!')
    db.close()
  })
})