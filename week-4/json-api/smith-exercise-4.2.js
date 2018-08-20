/*
============================================
; Title: Exercise 4.2
; Author: Professor Krasso
; Date: 20 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use JSON.
;===========================================
*/
var express = require('express');
var http = require('http');

var app = express();

app.get("/thing/:id", function(req, res) {
    var id = parseInt(req.params.id, 10);
    res.json({
        fruit: "pomegranate",
        sport: "curling",
        favoriteColor: "clear",
        id: id
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application is running on port 8080!");
});