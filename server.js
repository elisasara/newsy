var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Does this line connect to DB?
mongoose.connect("mongodb://localhost/newsyDb");

// Routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });

