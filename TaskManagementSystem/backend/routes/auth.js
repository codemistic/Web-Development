const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator"); //import express validate
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const JWT_SECRET = "enter your secret key";
var fetchuser = require('./middleware/fetchuser')

//Route 1 : Create a user using: POST "api/auth/createUser". No login required
router.post(
  "/createUser",
  [
    body("name", "Enter a valid name atleast 3 letters").isLength({ min: 3 }),
    body("email", "Enter valid email").isEmail(),
    body("password", "Enter atleast 8 letters long password").isLength({ min: 8}),
  ],
  async (req, res) => {
    // console.log(req.body);
    let success = false

    //check for errors(express validator)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check whether a user with that email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success,error: "sorry a user with this email already exists" });
      }
      //else create and save user
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({ success,authToken });

      // .then(user => res.json(user))
      // .catch(err=>{
      //   console.log(err);
      //   res.json({message: err.message})
      // });

      //older method to save to database below*******
      // const user = User(req.body);
      // user.save();
      // res.send(req.body);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error happened");
    }
  }
);

// Route 2 : Authenticate a User "/api/auth/login".  No login required
router.post(
  "/login",
  [
    body("email", "Enter valid email").isEmail(),
    body("password", "password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false
    //check for errors(express validator)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please login with correct details" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      console.log(user.password);
      if (!passwordCompare) {
        success=false
        return res
          .status(400)
          .json({ success,error: "Please login with correct details" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      success=true;
      res.json({success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occoured");
    }
  }
);

// Route 3 : Get logged in User details: POST "api/auth/getuser"

try {
  router.post( "/getuser", fetchuser, async (req, res) => {
     
      let userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    }
  );
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal server error occoured");
}
// let userId = "todo";
// const user = await User.findById(userId).select("-password");

module.exports = router;

// router.get('',[],(req,res)=>{

// })
