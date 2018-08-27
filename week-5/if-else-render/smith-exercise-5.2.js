/*
============================================
; Title: Exercise 5.2
; Author: Professor Krasso
; Date: 27 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use EJS with conditional statements.
;===========================================
*/
var express = require("express");
var http = require("http");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var names = [
    "Jerry",
    "Elaine",
    "George",
    "Cosmo"
];

app.get("/", function(req, res) {
    res.render("index", {
        names: names
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080");
});