const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, function() {
    console.log("Server is listening on port 8080")
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/Signup.html");
})

app.post("/", function(req, res) {
    var email = req.body.f_email;
    var password = req.body.f_password;
    console.log(email, password);
})

//8ef4752200f326c50dd913b81f0cda58-us6