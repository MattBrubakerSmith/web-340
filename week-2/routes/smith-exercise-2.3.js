/*
============================================
; Title: Exercise 2.3
; Author: Professor Krasso
; Date: 6 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use routes with Express/NodeJS.
;===========================================
*/

var Express = require("express");
var Http = require("http");

var app = Express();

app.get("/", function(req, res) {
    res.end("Welcome to the homepage!");
});

app.get("/about", function(req, res) {
    res.end("Welcome to the about page!");
});

app.get("/contact", function(req, res) {
    res.end("Welcome to the contact page!");
});

app.use(function(req, res) {
    res.statusCode = 404;
    res.end("404!");
});

Http.createServer(app).listen(8080);