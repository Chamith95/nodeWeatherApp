const express = require('express')
const path= require ('path')
const hbs=require('hbs');

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


app.get('*',(req,res)=>{
    res.send("MY 404 page");
})


app.listen(3000, ()=>{
    console.log("server is up on port 3000")
})