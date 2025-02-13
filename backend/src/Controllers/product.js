const {Router} = require('express');
const { default: productModel } = require('../Model/productModel');
const productRouter = Router();
const path = require('path');

productRouter.get("/get-product",async(req,res)=>{
    try{
        const productFind = await productModel.find();
        const products =productFind.map((product)=>{
            return{
                name:product.name,
                description:product.description,
                category:product.category,
                tags:product.tags,
                price:product.price,
                stock:product.stock,
                email:product.email,
                images:product.images,
            };
        });
        res.status(200).json({products:products});
    }
    catch(error){
        console.log(err);
    }
});


productRouter.get('/',(req,res)=>{
    res.send('Product Route');
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

productRouter.put('/edit-product/:id',productUpload.array('files',10),async(req,res)=>{
    try{
    const id = req.params ; 
    const {name,description,price,stock,email,img,category,tag}=req.body;
    const existproduct = await productModel.findById(id)
    if(!existproduct){
        res.status(400).json({message:'Product does not exist '});
    }
    const updateImage = existproduct.files
   if(req.files  && req.files.length>0){
    updateImage=req.files.map((img)=>{
        return `/product/${path.basename(img.path)}`
    })
   }
   existproduct.name = name,
   existproduct.description=description,
   existproduct.price = price,
   existproduct.stock = stock,
   existproduct.email = email,
   existproduct.img = updateImage,
   existproduct.category =  category,
   existproduct.tag = tag ;
   await existproduct.save();
}
catch(error){
    console.error("error while updating");
}
})


 module.exports = productRouter; 