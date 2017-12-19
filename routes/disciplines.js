//var config = require('../utils/config/defaults.json');
var express = require('express');
var router = express.Router();
var database = require('../utils/database.js');
var MongoClient = require('mongodb').MongoClient;
var config = require('../utils/config/config.js');

async function getDisciplines() {

    return dis;
}

router.get('/', async function(req, res, next) {
  let dis = [];
  let status = 200;

  let db = await MongoClient.connect(config.connection_string);
  try {
    let dbBase = db.db('shoot-insights');
    dis = await dbBase.collection('athlet').aggregate([
      { $unwind: "$Disziplines"},
      { $group: { _id: "$Disziplines.Name" } }
    ]).map(v => v._id).toArray();
  } catch(ex) {
    status = 500;
    console.log(ex);
  } finally {
      db.close();
  }

  res.status(status).send(dis);
});

module.exports = router;
