const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var items=[" Buy food","Cook food","Eat food"];
let workItems=[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    var today = new Date();
    
    var option={
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    var day = today.toLocaleDateString("en-US",option);
    res.render("list",{listTitle: day,newListItems: items});
})

app.post("/",(req,res)=>{
    var item = req.body.newItem;

    if(req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);   
        res.redirect("/"); 
    }
    
    

    
})

app.get("/work",(req,res)=>{
    res.render("List",{listTitle: "Work List", newListItems: workItems});
})

app.post("/work",(req,res)=>{
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000,()=>{
    console.log("Server is started on port 3000");
})