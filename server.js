const express = require("express");
const app = express();
const PORT = process.env.PORT | 8001;
const users = require("./modules/users");
const contact = require("./modules/contact")
const neuralMachine = require("./modules/neuralMachine");
const https = require('https');


app.get("/",(req,res)=>{
    res.json({statusCode:200,message:"connected to server"})
})
app.use(express.json());
app.use(express.urlencoded());
app.use('/users',users);
app.use('/contact',contact);
app.use('/neural',neuralMachine)
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/webapp.ajrakhhouse.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/webapp.ajrakhhouse.com/fullchain.pem'),
    ca : fs.readFileSync('/etc/letsencrypt/live/webapp.ajrakhhouse.com/chain.pem')
  }

  https.createServer(options, app).listen(443, console.log(`server runs on port 443`))



// app.listen(PORT,()=>{
//     console.log("http://localhost:"+PORT);
// })
