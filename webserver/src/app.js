const express = require('express')
const path= require ('path')
const hbs=require('hbs');
const forecast=require('./utils/forecast')
const geocode=require('./utils/geocode')
const app =express()
const publicDirectorypath=path.join(__dirname,'../public')
const partialpath=path.join(__dirname,'../partials')

app.set('view engine', 'hbs');
hbs.registerPartials(partialpath);
app.use(express.static(publicDirectorypath))


app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather App",
        name:"Chamith"
    
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({error:"please send a address"})
    }

    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
            return res.send({error})
        }

        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                location,
                address:req.query.address
            })
        })
    })

})

app.get('/weather',(req,res)=>{
    res.render()
})


app.get('*',(req,res)=>{
    res.send("MY 404 page");
})


app.listen(3000, ()=>{
    console.log("server is up on port 3000")
})