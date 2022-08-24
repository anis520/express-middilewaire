const  express = require('express')
const check= require('../middlewares/checkage')
const agecheck= require('../controllers/controler')
const path= require('path')
const router= express.Router()




router.get('/',(req,res)=>{


res.status(200).send('<h2>home page</h2>')

})
router.get('/create',(req,res)=>{


res.status(200).sendFile(path.join(__dirname,'../public/file.html'))

})
router.post('/agecheck',check,agecheck)
    



module.exports=router