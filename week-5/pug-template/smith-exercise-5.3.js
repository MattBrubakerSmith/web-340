/*
============================================
; Title: Exercise 5.3
; Author: Professor Krasso
; Date: 27 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use Pug for templating.
;===========================================
*/
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(req, res) {
    res.render("index", {
        message: "Hi, I'm a pug."
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});