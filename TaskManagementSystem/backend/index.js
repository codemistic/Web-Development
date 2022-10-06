const connectToMongo = require("./db");
const express = require("express");
var cors = require('cors');
const app = express();
const port = 5000;

app.use(cors()); // middleware to use req.body since its json format
app.use(express.json()); // middleware to use req.body since its json format

connectToMongo(); // connect to mongodb database

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`TaskinglyPro listening on port ${port}`);
});
