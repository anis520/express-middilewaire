

const express=require('express')
const colors = require('colors')
const app = express()
const homerouter= require('./router/routers')
const path=require('path')
// const foldername = path.join(__dirname,'/viewed')
// const {check}= require('./middlewares/checkage')
// const agecheck= require('../controllers/controler')

app.use(express.json())
app.use('/user',homerouter)
app.use(express.urlencoded({extended:false}))




app.set('view engine','hbs')
// app.set('views',foldername)
// template engine rute

app.get("/engine",(req,res)=>{

res.render('file',{

   msg:"finally done"

})


})




app.get('/w',(req,res)=>{

res.send('<h2>welcome page</h2>')



})



app.listen(5050,(req,res)=>{


console.log('server was running on port 5050'.bgBlue);


})