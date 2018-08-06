/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 6 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use EJS.
;===========================================
*/

var Express = require("express");
var Http = require("http");
var Path = require("path");

var app = Express();

app.set("views", Path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("index", {
        firstName: "Matt",
        lastName: "Smith",
        address: "Secret Location"
    });
});

Http.createServer(app).listen(8080, function() {
    console.log("EJS-Views app started on port 8080.");
});