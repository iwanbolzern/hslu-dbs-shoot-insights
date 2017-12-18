var express = require('express');
var router = express.Router();
var database = require('../utils/database');

function createAthletView(athlet, dis) {
    let viewAthlet = {
        ID: athlet._id,
        Name: athlet.FamilyName,
        Nationality: athlet.Organisation
    };
    var average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

    let avg = average(dis.Qualifications);
    let avgSeries = [];
    let minLength = Math.min.apply(Math, dis.Qualifications.map(x => x.Series.length));
    for(let i = 0; i < minLength; i++) {
        let avg = average(dis.Qualifications.map(x => x.Series[0]));
        avgSeries.append(avg);
    }

    let result = regression.linear(dis.Qualifications.map(x => x.Score));
    let gradient = result.equation[0];
    //ToDO; arrange to up, down...

    viewAthlet.AvgScore = avg;
    viewAthlet.AvgSeries = avgSeries;
}

router.get('/:discipline', async function(req, res, next) {
    // get params
    var dis = req.params.discipline;

    //get data
    athlets = await database.getAthlets(dis);
    athlets.forEach(athlet => {
        let dis = athlet.Disciplines.filter(dis => dis.Name == dis)[0];
        let athletView = createAthletView(athlet, dis);

    });


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

module.exports = router;
