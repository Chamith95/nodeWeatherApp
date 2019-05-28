const request =require('request');

const forecast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/f82db3dce757cf5492716bf4cb4740db/'+ encodeURIComponent(latitude)+','+encodeURIComponent(longitude)
    request({url:url,json :true},(error,{body})=>{
        if(error){
            callback("could not get data",undefined)
        } else if (body.error){
            callback("Unable to find location",undefined);
        }
        else{
        callback(undefined,body.daily.data[0].summary);
        }
    })
}

module.exports=forecast;