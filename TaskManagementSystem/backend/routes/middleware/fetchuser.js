var jwt = require('jsonwebtoken');
const JWT_SECRET = "enter secret key";


const fetchuser = (req,res,next)=>{
    //get user from jwt token and add id to required obj
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please use a valid token"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user ;
        next();
    } catch (error) {
        res.status(401).send({error:"Please use a valid token"});
        
    }
  
    
}



module.exports = fetchuser;