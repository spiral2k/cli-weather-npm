var request = require('request');

module.exports = function(location, callback){

    location = encodeURIComponent(location);

    if(!location){
        return callback("No location provided.");
    }

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98';

    request({
        url: url,
        json: true
    }, function(error, response, body){

        if(error){
            callback('Unable to fetch weather.');
        }else {
            callback('It\'s ' + body.main.temp + ' in ' + body.name);
        }

        return;
    });

};