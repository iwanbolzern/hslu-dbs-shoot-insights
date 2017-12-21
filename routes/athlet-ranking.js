var express = require('express');
var router = express.Router();
var regression = require('regression');
var database = require('../utils/database');
database.initialize();

function createAthletView(athlet, dis) {
    let viewAthlet = {
        ID: athlet._id,
        Name: athlet.FamilyName + ' ' + athlet.GivenName,
        Nationality: athlet.Organisation,
        AvgScore: 0,
        AvgSeries: [],
        Trend: 'equal'
    };
    if(dis.Qualifications.length <= 0)
        return viewAthlet;

    var average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

    let avg = average(dis.Qualifications.map(x => x.Score));
    let avgSeries = [];
    let trend = null;

    let minLength = Math.min.apply(Math, dis.Qualifications.map(x => x.Series.length));
    for(let i = 0; i < minLength; i++) {
        let avgSerie = average(dis.Qualifications.map(x => x.Series[i]));
        avgSeries.push(avgSerie);
    }

    const scores = dis.Qualifications.map((x, i) => [i, x.Score]);
    let result = regression.linear(scores);
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
    var disName = req.params.discipline;

    //get data
    athlets = await database.getAthlets(disName);
    result = [];
    athlets.forEach(athlet => {
        let dis = athlet.Disciplines.filter(dis => dis.Name == disName)[0];
        let athletView = createAthletView(athlet, dis);
        result.push(athletView);
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
