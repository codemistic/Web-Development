const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/loginPage",{
// useNewUrlParser:true,
// useCreateIndex:true,
// useUnifiedTopology:true


}).then(()=>{
    console.log('successful')
}).catch((e)=>{
console.log(e)
})