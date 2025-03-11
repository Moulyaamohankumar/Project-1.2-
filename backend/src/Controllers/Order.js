const express = require('express');
const { Router } = require('express');
const { orderModel } = require('../Model/orderModel');
const orderRouter = Router();
const { auth } = require('../Middleware/auth');
const { userModel } = require('../Model/userModel');
const { productModel } = require('../Model/productModel');

orderRouter.post('/order', auth, async (req, res) => {
    const{address,city,state,zip,country,product,qunatity} = req.body;
    const {email} = req.user;  
    try{
        if(!address || !city || !state || !zip || !country || !product || !qunatity)
        {
            return res.status(400).json({message:"Fill all fields"});
        }
        const user = await userModel.findOne({email:email});
        const productDetails = await productModel.findOne({product:product});
        if(!user)
        {
            return res.status(400).json({message:"User not found"});
        }
        if(!productDetails)
        {
            return res.status(400).json({message:"Product not found"});
        }
        const orderDetails = new orderModel({address,city,state,zip,country,product,qunatity});
        await orderDetails.save();
        res.status(200).json({message:"Order placed successfully"});

}catch(error){
    console.log('error',err);
}
}


)
orderRouter.get('/order',async(res,req)=>{
    const{email} = req.user   
    if(!email){
        return res.status(400).json({message:"Invalid Email"});

    }
const orderHistory =await orderModel.findOne({email})

console.log(orderHistory);
})