/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: 6 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to run Express/NodeJS on a local server.
;===========================================
*/

var Express = require("express");
var Http = require("http");

var app = Express();

app.use(function(req, res) {
    console.log("In comes a request to: " + req.url);
    res.end("Hello World");
});

Http.createServer(app).listen(8080);