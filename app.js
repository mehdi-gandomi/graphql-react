const express=require('express');
const bodyParser=require('body-parser');
const PORT=3000 || process.env.PORT;
const app =express();

app.get("/",(req,res)=>{
    res.send("welcome to my graphql app");
})

app.listen(PORT,()=>{
    console.log("app running on port : "+PORT);
})