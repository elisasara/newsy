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
        db.Article.remove({});
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
                        });
                });
            });
            db.Article.find({})
            .then(function(allArticles){
                console.log(allArticles);
                // res.render("articles", {articleObj});
                res.render("articles", {articleObj: allArticles});
            })
    });


};