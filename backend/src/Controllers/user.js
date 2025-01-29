const {Router}= require("express");
const userModel = require("../Model/userModel");
const [upload] = require("../Middleware/multer");
const bcryt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = require("../Model/userModel");  
require("dotenv").config();


const userRouter = Router();
const secret = process.env.privateKey;


userRouter.post("/create-user",upload.single("file"), async(req,res)=>{
    const {name, email, password} = req.body;
    const userEmail = await userModel.findOne({email});
    if (userEmail) {
        return next(new ErrorHandler("User already exists", 400));
      }
bcryt.hash(password, 10,async function(err,hash){
 await userModel.create({
    name:name,
    email:email,
    password:hash,
    avatar: fileUrl,
 })
  
});
});
userRouter.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({email}); 
if(!user){
    return res.status(404).json({message:"User not found"});
}
bcryt.compare(password , user.password, function(err,result){
    if(!result){
        return res.status(400).json({message:"Invalid password"});
    }
    if (err) {
        return res.status(500).json({message:"Internal Server Error"});
    
    }
    else{
        jwt.sign({email:email},xyz,(err,token)=>{
            if(err){
                return res.status(500).json({message:"Internal Server Error"});
            }
            console.log(token);
            res.status(200).json({token : token});
        })
    return res.status(200).json({message:"Login successful"});
    }

});

});



// const filename = req.file.filename ;
// const fileUrl = path.join(filename);
// const user={
//     name:name,
//     email:email,
//     password:password,
//     avatar: fileUrl,
// } ;



module.exports = userRouter;