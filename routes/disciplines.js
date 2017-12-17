//var config = require('../utils/config/defaults.json');
var express = require('express');
var router = express.Router();
var database = require('../utils/database.js');
var MongoClient = require('mongodb').MongoClient;
var config = require('../utils/config/config.js');

async function getDisciplines() {
    let db = await MongoClient.connect(config.connection_string);
    try {

    } finally {
        db.close();
    }

    return [
       '10 Meter Pistol',
       '10 Meter Air Rifle'
    ];
}

router.get('/', async function(req, res, next) {
    getDisciplines()
        .then(dis => {
            console.info(dis);
            res.send(dis);
        })
        .catch((err) => {
            console.error(err);
            res.send(err);
        });
});

module.exports = router;
