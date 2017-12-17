var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {

    var id = req.params.id;

    var athlet = {
        Name: "Iwan Bolzern",
        Nationality: "CH",
        Disciplines: [
            {
                Name: "10 Meteres Air Rifle",
                Results: [
                    {
                        Competition: "China",
                        Series: [80, 20, 30]
                    }
                ]
            }
        ]
    };

    res.send(athlet);
});

module.exports = router;
