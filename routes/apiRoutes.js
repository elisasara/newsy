var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// var axios = require("axios");
var cheerio = require("cheerio");
var app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));