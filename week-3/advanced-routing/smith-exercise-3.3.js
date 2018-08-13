/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 13 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use advanced routing techniques with
; Node/Express.
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

app.get("/:employeeId", function(req, res) {
    var employeeId = parseInt(req.params.employeeId, 10);
    res.render("index", {
        employeeId: employeeId
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});