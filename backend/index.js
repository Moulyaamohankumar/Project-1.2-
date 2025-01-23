const express = require('express');
const app  = express();
const { connectDB } = require('./src/DataBase/db');

require('dotenv').config({
    path:'./src/config/.env'
});
const PORT = process.env.PORT ||8080
const url = process.env.db_url

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT, async()=>{

    try{
        await connectDB(url);
        console.log(`Server is running at port${PORT}`)
    }
    catch(err){ 
        console.log(err);
    }

   
})