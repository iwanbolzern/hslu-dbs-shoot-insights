const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const config = require('../utils/config/config.js');
const router = express.Router();

router.get('/:id', async function(req, res, next) {
    var id = req.params.id;
    let dis = [];
    let status = 200;

    // Verbinden mit der MongoDB 
    let db = await MongoClient.connect(config.connection_string);
    try {
      // Datenbank Selektieren 
      let dbBase = db.db('shoot-insights');
      // Collection "athlet" Selektieren und durch findOne() den Cursor erhalten und den ersten Wert  
      // zurückgeben 
      var athlet = await dbBase.collection("athlet").findOne(ObjectID(id));
    } catch(ex) {
      status = 404;
    } finally {
      db.close();
    }

    res.status(status).send(athlet);
});

module.exports = router;
