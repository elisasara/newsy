var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var app = express();
var db = require("../models");


module.exports = function (app) {
    app.get("/", function (req, res) {
        // THIS CAUSES ISSUES WHEN YOU RUN THE SCRAP AGAIN. IS THERE A WAY TO FIX THIS??
        // db.Article.deleteMany({}, function (err) {
        //     if (err) return err;
        // });
        // db.Note.deleteMany({}), function (err) {
        //     if (err) return err;
        // }
        res.render("index");
    });

    app.get("/articles", function (req, res) {
        // WHY DOESN'T THIS WORK THE FIRST TIME YOU GO TO THE PAGE?? IT REQUIRES A REFRESH...
        axios.get("https://www.theatlantic.com/")
            .then(function (response) {
                var $ = cheerio.load(response.data);

                $(".o-hed").each(function (i, element) {

                    var title = $(element).text();
                    var link = $(element).children("a").attr("href");

                    db.Article.findOneAndUpdate({"title": title}, { "title": title, "link": link }, {upsert: true}  )
                        .then(function (dbArticle) {
                        });
                });
            });
        db.Article.find({}).sort()
            .then(function (allArticles) {
                console.log(allArticles);
                res.render("articles", { articleObj: allArticles });
            });
    });

    app.get("/saved", function (req, res) {
        db.Article.find({ saved: true }
        ).populate("note")
            .then(function (saved) {
                console.log(saved);
                console.log(saved[0].note[0].title);
                res.render("saved", { savedArticles: saved })
            })
    });

    app.put("/saved/:id", function (req, res) {
        db.Article.findByIdAndUpdate(req.params.id, { saved: true }, { new: true })
            .then(function (saved) {
                // res.redirect("/saved");
                console.log("The article has been saved");
            });
    });

    // I'M NOT SURE THIS IS WORKING OR NECESSARY
    app.get("/saved/:id", function (req, res) {
        res.redirect("/saved");
    });

    app.post("/notes/:id", function (req, res) {
        db.Note.create(req.body)
            .then(function (note) {
                console.log("Note added");
                return db.Article.findOneAndUpdate({ _id: req.params.id }, { $push: { note: note._id } }, { new: true });
            });
    });

    app.get("/notes/:id", function (req, res) {
        db.Note.find({})
            .then(function (data) {
                res.json(data);
            });
    });


};