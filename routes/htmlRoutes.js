var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// var axios = require("axios");
var cheerio = require("cheerio");
var app = express();


// // Use body-parser for handling form submissions
// app.use(bodyParser.urlencoded({ extended: true }));
module.exports = function(app) {
app.get("/", function(req, res){
    // var articleObj = {};

    // on click, clear db and make axios call for article scraping
    // push article info into db
    // create object to be passed into handlebars file

    // render the object to the index.handlebars
    res.render("index");
});

};