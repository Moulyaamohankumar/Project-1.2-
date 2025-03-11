const {Router}= require("express");
const userModel = require("../Model/userModel");
const { upload } = require("../../multer");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const path = require('path');
const userrouter = Router();
const Order = require('../Model/orderPlacementModel');
require('dotenv').config({ path: './src/config/.env' });


const secret = process.env.secretkey;

userrouter.post("/create-user", upload.single('file'), async (req, res, next) => {
    const { name, email, password } = req.body;
    const userEmail = await userModel.findOne({ email });
    if (userEmail) {
        return res.status(400).json({ message: "User already exists" });
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
            return res.status(500).json({ message: "Error hashing password" });
        }

        await userModel.create({
            name: name,
            email: email,
            password: hash,
            // avatar: fileUrl
        });

        res.status(201).json({ message: "User created successfully" });
    });
});

userrouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const check = await userModel.findOne({ email: email });
    console.log(check);
    if (!check) {
        return res.status(400).json({ message: "User not found" });
    }

    bcrypt.compare(password, check.password, function (err, result) {
        if (err) {
            return res.status(400).json({ message: "Invalid bcrypt compare" });
        }
        if (result) {
            jwt.sign({ email: email }, secret, (err, token) => {
                if (err) {
                    return res.status(400).json({ message: "Invalid jwt" });
                }
                res.setHeader('Authorization', `Bearer ${token}`);
                console.log(token);
                res.status(200).json({ token: token });
            });
        } else {
            return res.status(400).json({ message: "Invalid password" });
        }
    });
});

userrouter.post('/order', async (req, res) => {
    const { email, products } = req.body;

    try {
        const user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const userId = user._id;
        let orderList = [];

        if (!products || !Array.isArray(products)) {
            return res.status(400).json({ message: "Invalid products data" });
        }

        for (const product of products) {
            const newOrder = new Order({
                userId: userId,
                productId: product.productId,
                quantity: product.quantity,
                price: product.price
            });

            await newOrder.save();
            orderList.push(newOrder);
        }

        res.status(200).json({ message: "Order added successfully", orders: orderList });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = userrouter;