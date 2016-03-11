//function doWork(data, callback){
//    callback('done');
//}
//
//function doWorkPromise(data){
//    return new Promise(function(resolve, reject){
//        reject('éverything NOT worked!');
//        //reject({
//        //    error:'somthing bad happend'
//        //});
//    });
//}
//
//doWorkPromise('some data').then(function(data){
//    console.log(data);
//},function(error){
//    console.log(error);
//});
var request = require('request');

function getWeather(location){

    return new Promise(function(resolve, reject){

        location = encodeURIComponent(location);

        if(!location){
            return reject("No location provided.");
        }

        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98';

        request({
            url: url,
            json: true
        }, function(error, response, body){

            if(error){
                reject('Unable to fetch weather.');
            }else {
                resolve('It\'s ' + body.main.temp + ' in ' + body.name);
            }

        });
    });
}

getWeather('new york').then(function(currentWeather){
    console.log(currentWeather);
},function(error){
    console.log(error);

})