

router.get('/:discipline', function(req, res, next) {

    var dis = req.params.discipline;


    result = [
        {
            ID: 100,
            Name: 'Iwan Bolzern',
            Nationality: 'CH',
            AvgScore: 605.3,
            AvgSeries: [98, 94, 93, 92],
            Trend: 'up' //up, down, equal
        }
    ];

    res.send(result);
});