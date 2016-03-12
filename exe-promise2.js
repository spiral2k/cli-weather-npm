//function doWork(fail){
//    return new Promise(function(resolve, reject){
//       setTimeout(function(){
//            if(typeof fail === 'boolean' && fail === true){
//                reject('eeeerrrooorrr');
//            }else{
//                resolve('yeeeeshhhh');
//            }
//        }, 1000) ;
//    });
//}
//
//doWork(true).then(function(message){
//    console.log(message);
//    return doWork(true);
//}).then(function(message){
//    console.log(message);
//}).catch(function(error){
//    console.log(error);
//});


function getLocation(){
    return new Promise(function(resolve, reject){
        resolve('haifa');
    });
}

function getWeather(location){
    return new Promise(function(resolve, reject){
        resolve('location: ' + location);
    });
}

getLocation().then(function(location){
    return getWeather(location);
}).then(function(location){
    console.log(location);
});