const express = require("express");
const app = express();
const PORT = process.env.PORT | 8001;
const users = require("./modules/users");

app.get("/",(req,res)=>{
    res.json({statusCode:200,message:"connected to server"})
})
app.use(express.json());
app.use(express.urlencoded());
app.use('/users',users);

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})