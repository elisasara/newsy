var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");
var app = express();


// // Use body-parser for handling form submissions
// app.use(bodyParser.urlencoded({ extended: true }));
module.exports = function (app) {
    app.get("/", function (req, res) {
        // var articleObj = {};

        // on click, clear db and make axios call for article scraping
        // $("#scrape").on("click", function () {
        //     axios.get("https://www.theatlantic.com/")
        //         .then(function (response) {
        //             var $ = cheerio.load(response.data);

        //             $(".o-hed").each(function (i, element) {
        //                 var result = {};

        //                 result.title = $(this).children("a").text();
        //                 result.link = $(this).children("a").attr("href");
                        
        //                 console.log(result);
        //             })
        //         })
                // .then(function(result){
                //     console.log(resul)
                // });
        // });
        // push article info into db
        // create object to be passed into handlebars file

        // render the object to the index.handlebars
        res.render("index");
    });

};