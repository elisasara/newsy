var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// var axios = require("axios");
var cheerio = require("cheerio");
var app = express();
var db = require("../models");



module.exports = function(app){
    
    // THIS PROVES I REALLY DID GET MONGOOSE TO WORK EVEN IF IT IS NOT ALWAYS CLEAR SINCE MY APP IS POOP!
    app.get("/api/saved", function(req,res){
    db.Article.find({ saved: true }
    ).populate("note")
        .then(function (saved) {
            console.log(saved);
            res.json(saved)
        });
});

};