var express = require('express');
var router = express.Router();
var database = require('../utils/database');
database.initialize();

function createAthletView(athlet, dis) {
    let viewAthlet = {
        ID: athlet._id,
        Name: athlet.FamilyName,
        Nationality: athlet.Organisation
    };
    var average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

    let avg = average(dis.Qualifications);
    let avgSeries = [];
    let trend = null;

    let minLength = Math.min.apply(Math, dis.Qualifications.map(x => x.Series.length));
    for(let i = 0; i < minLength; i++) {
        let avg = average(dis.Qualifications.map(x => x.Series[0]));
        avgSeries.append(avg);
    }

    let result = regression.linear(dis.Qualifications.map(x => x.Score));
    let gradient = result.equation[0];
    if(gradient < -0.3)
        trend = 'down';
    else if(gradient < 0.3)
        trend = 'equal';
    else
        trend = 'up';

    viewAthlet.AvgScore = avg;
    viewAthlet.AvgSeries = avgSeries;
    viewAthlet.Trend = trend;
    return viewAthlet;
}

router.get('/:discipline', async function(req, res, next) {
    // get params
    var dis = req.params.discipline;

    //get data
    athlets = await database.getAthlets(dis);
    result = [];
    athlets.forEach(athlet => {
        let dis = athlet.Disciplines.filter(dis => dis.Name == dis)[0];
        let athletView = createAthletView(athlet, dis);
        result.append(athletView);
    });


    // result = [
    //     {
    //         ID: 100,
    //         Name: 'Iwan Bolzern',
    //         Nationality: 'CH',
    //         AvgScore: 605.3,
    //         AvgSeries: [98, 94, 93, 92],
    //         Trend: 'up' //up, down, equal
    //     }
    // ];

    res.send(result);
});

module.exports = router;
