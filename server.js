const express = require("express");
const app = express();
const PORT = process.env.PORT | 8001;
const users = require("./modules/users");
const contact = require("./modules/contact")
const neuralMachine = require("./modules/neuralMachine");

app.get("/",(req,res)=>{
    res.json({statusCode:200,message:"connected to server"})
})
app.use(express.json());
app.use(express.urlencoded());
app.use('/users',users);
app.use('/contact',contact);
app.use('/neural',neuralMachine)

app.listen(PORT,()=>{
    console.log("http://localhost:"+PORT);
})