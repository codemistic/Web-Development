
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');
require("./db/mongo")
const User = require("./models/users");

const app = express();

const staticpath = path.join(__dirname, "../public");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticpath));

app.get('/', (req, res) => {


    res.send("hello");
});
app.get('/register', (req, res) => {

    res.sendFile(path.join(__dirname + '/../public/new.html'))
});
app.get('/login', (req, res) => {

    res.sendFile(path.join(__dirname + '/../public/login.html'))
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, gender, password, confirmpassword } = req.body;
        // console.log(password, confirmpassword)
        if (password === confirmpassword) {
            await User.create({
                username, email, gender, password
            })

            // const registered = await userRegister.save();

            res.status(201).sendFile(path.join(__dirname + '/../public/home.html'));

        } else {
            res.send("passwords are not matching")
        }

    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);

    }
    // res.sendFile(path.join(__dirname+'/../public/home.html'))
});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(email, password);
        const useremail = await User.findOne({ email });
        // console.log(useremail);
        if (useremail.password === password) {
            return res.status(201).sendFile(path.join(__dirname + '/../public/home.html'));
        }
    } catch (error) {
        // console.log(error);
        return res.status(201).send("Wrong Credentials")
    }

});

app.listen(PORT, () => {
    console.log("listening to youuu!!!!!!!")
});







