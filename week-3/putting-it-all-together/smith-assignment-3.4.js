/*
============================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 13 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use middleware and routing with
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

app.get("/", function(req, res) {
    res.render("index", {
        message: "Home Page"
    });
});

app.get("/about", function(req, res) {
    res.render("about", {
        message: "About Page"
    });
});

app.get("/contact", function(req, res) {
    res.render("contact", {
        message: "Contact Page"
    });
});

app.get("/products", function(req, res) {
    res.render("products", {
        message: "Products Page"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});