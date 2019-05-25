const request = require('request');
const geocode = require('./utils/geocode')

const url="https://api.darksky.net/forecast/f82db3dce757cf5492716bf4cb4740db/37.8267,-122.4233"

request({url:url,json :true},(error,response)=>{
    if(error){
        console.log("could not get data")
    } else if (response.body.error){
        console.log("Unable to find location");
    }
    else{
    console.log(response.body.daily.data[0].summary);
    }
})






geocode('New York',(error,data)=>{
    console.log('Data' ,data);
})