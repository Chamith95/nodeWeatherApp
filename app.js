const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address=process.argv[2];
 
if(!address){
    console.log("please enter a location")
}
else{
    geocode(address,(error,{latitude,longitude,location})=>{
        if(error){
           return console.log(error);
        }
        // console.log('Data' ,data);
        forecast(latitude,longitude,(error,forecastdata)=>{
            if(error){
                return console.log(error);
             }
            console.log(location);
            console.log(forecastdata);
        })
    })
}









