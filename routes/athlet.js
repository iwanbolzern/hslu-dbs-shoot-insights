const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const config = require('../utils/config/config.js');
const router = express.Router();

router.get('/:id', async function(req, res, next) {
    var id = req.params.id;
    let dis = [];
    let status = 200;

    let db = await MongoClient.connect(config.connection_string);
    try {
      let dbBase = db.db('shoot-insights');
      var athlet = await dbBase.collection("athlet").findOne(ObjectID(id));
    } catch(ex) {
      status = 404;
    } finally {
      db.close();
    }

    res.status(status).send(athlet);
});

module.exports = router;
