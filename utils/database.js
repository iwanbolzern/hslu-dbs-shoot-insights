var MongoClient = require('mongodb').MongoClient;
var database = null;

var initialize = async function(config) {
    // Connection URL
    var url = config.connection_string;

    // Use connect method to connect to the Server
    database = await MongoClient.connect(url);
};

var getAthlets = async function(disciplinId) {
    let collection = database.collection('athlet');
    let athlets = await collection.find({'Disziplines':
            { $elemMatch : {'Name': disciplinId}}
    }).toArray();

    return athlets;
};

module.exports = {
    getAthlets: getAthlets,
    initialize: initialize
};
