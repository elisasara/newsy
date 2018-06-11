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
        res.render("index");
    });

    app.get("/articles", function (req, res) {
        var articleObj = {};
        axios.get("https://www.theatlantic.com/")
            .then(function (response) {
                var $ = cheerio.load(response.data);

                $(".o-hed").each(function (i, element) {

                    var title = $(element).text();
                    var link = $(element).children("a").attr("href");

                    db.Article.create({ "title": title, "link": link })
                        .then(function (dbArticle) {
                            console.log(dbArticle);
                            articleObj = {
                                dbArticle: dbArticle
                            }
                        });
                });
            });
            res.render("articles", {articleObj});
    });


};