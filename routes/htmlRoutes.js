var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var app = express();
var db = require("../models");


// // Use body-parser for handling form submissions
// app.use(bodyParser.urlencoded({ extended: true }));

module.exports = function (app) {
    app.get("/", function (req, res) {
        // update just for articles that do not have notes
        db.Article.deleteMany({}, function(err){
            if (err) return err;
        });
        res.render("index");
    });

    app.get("/articles", function (req, res) {
        axios.get("https://www.theatlantic.com/")
            .then(function (response) {
                var $ = cheerio.load(response.data);

                $(".o-hed").each(function (i, element) {

                    var title = $(element).text();
                    var link = $(element).children("a").attr("href");

                    db.Article.create({ "title": title, "link": link })
                        .then(function (dbArticle) {
                            // articleObj = dbArticle
                            // writeResult({ "nInserted" : 1 })
                        });
                });
            });
            db.Article.find({})
            .then(function(allArticles){
                console.log(allArticles);
                res.render("articles", {articleObj: allArticles});
            })
    });

    app.get("/saved", function(req, res){
        db.Article.find({saved: true})
        .then(function(saved){
            console.log(saved);
            res.render("saved", {savedArticles: saved})
        })
    });

    app.put("/saved/:id", function(req, res){
        db.Article.findByIdAndUpdate(req.params.id, {saved: true}, {new: true})
        .then(function(saved){
            // res.redirect("/saved");
            console.log("The article has been saved");
        });
    });

    app.get("/saved/:id", function(req, res){
        res.redirect("/saved");
    });

    app.post("/notes/:id", function(req, res){

    });

    app.get("/notes/:id", function(req, res){

    });


};