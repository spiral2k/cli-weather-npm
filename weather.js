var request = require('request');

module.exports = function(location){

return new Promise(function(resolve, reject){
    location = encodeURIComponent(location);

    if(!location){
        return reject("No location provided.");
    }

    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=d4f97f3b6f86fa004e66706645fbb867';

    request({
        url: url,
        json: true
    }, function(error, response, body){

        if(error){
            reject('Unable to fetch weather.');
        }else {
            console.log(body)

            resolve('It\'s ' + body.main.temp + ' in ' + body.name);
        }
    });

})
};