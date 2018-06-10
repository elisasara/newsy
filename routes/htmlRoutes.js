var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    // get information from database for articles
    // create object with that info to be passed to handlebars
    // if no info then handlebars will put the correct message.
    res.render("index", articleObj)
})