const {Router} = require('express'); 
const userModel = require('../Model/userModel'); 
const { upload } = require('../../multer');
const profileRouter = Router(); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const path = require('path');
require('dotenv').config({path:'./src/config/.env'});
const secret = process.env.secretkey;

profileRouter.get('/get-profile',async(req,res)=>{
    const{email} = req.body;
    const userId = await userModel.findOne({email});
    try{
    if(!userId){
        return res.status(400).json({message:'user Not Found'})
    }
    res.status(200).json({email}) 
    return{
    name : userId.name,
    email : userId.email,
    password : userId.password,
    avatar : userId.avatar,
    
    }
}catch(err){
    console.log(error);
}
})