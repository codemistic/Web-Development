const mongoose = require ('mongoose');
const userSchema =new  mongoose.Schema({
username :{
    type:String,
    required:true,
},
email:{
    type:String,
    required:true,
    unique:true

},
gender :{
type: String,
required: true
},
// phone : {
//     type:Number,
//     required:true,
//     unique:true
// },
// age : {
//     type:Number,
//     required:true
// },
password : {
    type:String,
    required:true,
   
}

})

// collection
module.exports= new mongoose.model("User",userSchema);