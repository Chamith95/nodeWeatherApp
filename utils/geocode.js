const request =require('request');

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiY2hhbWl0aCIsImEiOiJjanczc3dlYXYwbG5nM3pvNnRpdzF1dzgyIn0.zF7tVFYCWRYLncol87OeXA&limit=1'
    request({url : url,json: true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location services!',undefined);
        }else if (response.body.features==0){
            callback('Unable to find location ,Try another search',undefined);
        }
        else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                 longitude:response.body.features[0].center[0],
                 location:response.body.features[0].place_name

            })
        }

})
}

module.exports=geocode;