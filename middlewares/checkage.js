


const check =(req,res,next)=>{


    const {name,age}=req.body;



    if(age>80){
        res.send('not done');
    }else{
        next();
    }


}
module.exports=check