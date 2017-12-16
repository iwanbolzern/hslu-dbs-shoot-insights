var MongoClient = require('mongodb').MongoClient;
var database = null;

var initialize = function(config) {
    // Connection URL
    var url = config.connection_string;

    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        if(err)
            console.error("Connection to MongoDB Server faild");

        database = db
    });
};

var getAthlets = function(disciplinId) {
    var collection = database.collection('athlet');
};

module.exports = {
    initialize: initialize,
    sensorModel: function() { return mongoose.model('Sensor') },
    sensorValueModel: function () { return mongoose.model('SensorValue') }
};