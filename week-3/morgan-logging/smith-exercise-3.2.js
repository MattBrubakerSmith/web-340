/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 13 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use logging middleware in Node/Express.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(req, res) {
    res.render("index", {
        message: "Welcome to the Morgan Logger Jungle|Where we bring down all the ch-ch-ch-ch-ch-trees... trees."
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});