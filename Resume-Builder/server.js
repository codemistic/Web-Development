const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const path = require("path");

const app = express();

const pdfTemplate = require("./documents");

const options = {
	height: "42cm",
	width: "29.7cm",
	timeout: "6000",
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

// POST route for PDF generation....
app.post("/create-pdf", (req, res) => {
	pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
		if (err) {
			console.log(err);
			res.send(Promise.reject());
		} else res.send(Promise.resolve());
	});
});

// GET route -> send generated PDF to client...
app.get("/fetch-pdf", (req, res) => {
	const file = path.join(__dirname, `${__dirname}/Resume.pdf`);
	console.log(file);
	console.log("show");
	res.download(file);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
