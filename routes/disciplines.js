

router.get('/', function(req, res, next) {
    dis = [
        '10 Meter Pistol',
        '10 Meter Air Rifle'
    ];
    res.send(dis);
});