/*
============================================
; Title: Exercise 4.3
; Author: Professor Krasso
; Date: 20 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use HTTP status codes.
;===========================================
*/
var express = require('express');
var http = require('http');

var app = express();

app.get("/not-found", function(req, res) {
    res.status(404);
    res.json({
        error: "You screwed up! Nothing to see here!"
    });
});

app.get("/ok", function(req, res) {
    res.status(200);
    res.json({
        message: "Great job! I mean really, bravo! You exceeded all expectations!"
    });
});

app.get("/not-implemented", function(req, res) {
    res.status(501);
    res.json({
        message: "We screwed up! Should be something to see here, but alas!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application is running on port 8080!");
});