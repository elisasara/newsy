var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Does this line connecto DB?
mongoose.connect("mongodb://localhost/newsyDb");

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });

