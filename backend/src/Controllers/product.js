const { Router } = require('express');
// const { default: productModel } = require('../Model/productModel');
const { default: mongoose } = require('mongoose');
const path = require('path');
const Productmodel = require('../Model/Productmodel');
const productRouter = Router();

productRouter.get("/get-product", async (req, res) => {
    try {
        const productFind = await productModel.find();
        const products = productFind.map((product) => {
            return {
                name: product.name,
                description: product.description,
                category: product.category,
                tags: product.tags,
                price: product.price,
                stock: product.stock,
                email: product.email,
                images: product.images,
            };
        });
        res.status(200).json({ products: products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

productRouter.get('/', (req, res) => {
    res.send('Product Route');
});

productRouter.post('/cart', async (req, res) => {
    const { email, productid, productname, quantity } = req.body;
    try {
        if (!email || !productid || !productname || !quantity) {
            return res.status(400).json({ message: "Fill all fields" });
        }
        const findemail = await userModel.findOne({ email: email });
        if (!findemail) {
            return res.status(404).json({ message: 'User does not exist' });
        }
        if (!mongoose.Types.ObjectId.isValid(productid)) {
            return res.status(400).json({ message: 'Product is not valid' });
        }
        if(!quantity && quantity<0){
            return res.status(400).json({ message: 'Product is not valid' })
        }
        const findproduct = await productModel.findById(productid)
        if(!findproduct){
            return res.status(400).json({ message: 'Product is not valid' })
        }
        const cardproductid = await findemail.cart.findIndex((i)=>{
            return i.productid===productid;
        })
        if(cartproductid>-1){
            findemail.cart[cartproductid].quantity+=quantity
        }else{
           findemail.cart.push({productid,productname,quantity}) 
        }

          const user  = await userModel.findOne({email:email}).populate({
            path:cart.productid,
            model:productModel
          })
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
productRouter.get('/getCart',async(req,res)=>{
    const {email} = req.body
    try{
    if(!email){
        return res.status(400).json({message:"user does not exist"})
    }
}catch(err){
    console.log("error in cart for get ")
}
})
productRouter.post('/', productUpload.array('files'), async (req, res) => {
    try {
        const { name, description, price, stock, email, category, tag } = req.body;
        const images = req.files.map(file => file.path);

        const seller = await productModel.findOne({ email: email });
        if (!seller) {
            return res.status(400).json({ message: "Seller not found." });
        }

        if (images.length === 0) {
            return res.status(400).json({ message: "Please upload at least one image." });
        }

        const newProduct = await productModel.create({
            name,
            description,
            category,
            tag,
            price,
            stock,
            email,
            img: images,
        });

        return res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

productRouter.put('/edit-product/:id', productUpload.array('files', 10), async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description, price, stock, email, category, tag } = req.body;
        const existproduct = await productModel.findById(id);
        if (!existproduct) {
            return res.status(400).json({ message: 'Product does not exist' });
        }
        let updateImage = existproduct.img;
        if (req.files && req.files.length > 0) {
            updateImage = req.files.map((img) => {
                return `/product/${path.basename(img.path)}`;
            });
        }
        existproduct.name = name;
        existproduct.description = description;
        existproduct.price = price;
        existproduct.stock = stock;
        existproduct.email = email;
        existproduct.img = updateImage;
        existproduct.category = category;
        existproduct.tag = tag;
        await existproduct.save();
        res.status(200).json({ message: "Product updated successfully" });
    } catch (error) {
        console.error("Error while updating:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

productRouter.put('/put-cart',async(res,req)=>{
    const {email , productid , quantity} = req.body;
    try{
        if(!email || !productid || !quantity){
            return res.status(400).json({message:"Fill all fields"});
        }
        const findemail = await userModel.findOne({email:email});
        if(!findemail){
            return res.status(404).json({message:"User does not exist"});
        }
        if(!mongoose.Types.ObjectId.isValid(productid)){
            return res.status(400).json({message:"Product is not valid"});
        }
        if(!quantity && quantity<0){
            return res.status(400).json({message:"Product is not valid"});
        }
        const findproduct = await productModel.findById(productid);
        if(!findproduct){
            return res.status(400).json({message:"Product is not valid"});
        }                                      
        const cartproductid = await findemail.cart.findIndex((i)=>{  
            return i.productid===productid; 
        }) 
        if(cartproductid>-1){
            findemail.cart[cartproductid].quantity=quantity;
        }else{
            findemail.cart.push({productid,quantity});
        } 
        await findemail.save();
        res.status(200).json({message:"Cart updated successfully"});
    }
})

productRouter.put('/put-price',async(req,res)=>{
    const{price , image , stock , category , tag} = req.body;
    try{
        if(!price || !image || !stock || !category || !tag){
            return res.status(400).json({message:"Fill all fields"});
        }
        const findproduct = await productModel.findOne({price:price});
        if(!findproduct){
            return res.status(404).json({message:"Product does not exist"});
        }
        findproduct.price=price;
        findproduct.image=image;
        findproduct.stock=stock;
        findproduct.category=category;
        findproduct.tag=tag;
        await findproduct.save();
        res.status(200).json({message:"Product updated successfully"});
    }catch(err){
        console.lop('Server error',err)
    }
})
module.exports = productRouter;
