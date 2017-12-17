var config = require('../utils/config/defaults.json');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    dis = [
        '10 Meter Pistol',
        '10 Meter Air Rifle'
    ];
    res.send(dis);
});

module.exports = router;
