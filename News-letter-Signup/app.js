//  jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");// install request package --> npm i request

const app = express();

app.use('/public', express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/",function(req,res){
  console.log(req.body.FirstName);
  console.log(req.body.LastName);
  console.log(req.body.email);
  
  res.send("thanks for email");
})

app.listen(3000,function(){
  console.log("server is active ");
});
