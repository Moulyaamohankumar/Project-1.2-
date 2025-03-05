const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
require('dotenv').config({  path:'../Config/.env'});
const secret = process.env.secretkey;

const auth = async(req, res, next) => {
    const tokenauth = req.header.authorization;
    const token = tokenauth.split(" ")[1];
    jwt.verify(token, secret, function(err, decoded) {
        if (err) {
            console.log("Invalid token",err);
        }
        else{
            next();
        }
      })

}
