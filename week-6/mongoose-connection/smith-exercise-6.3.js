/*
============================================
; Title: Exercise 6.3
; Author: Professor Krasso
; Date: 5 September 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use Mongoose with MongoDB.
;===========================================
*/
var mongoose = require("mongoose");
var mongoDB = "mongodb://smaft:smaft1@ds145752.mlab.com:45752/ems";

mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance.");
});

var express = require("express");
var http = require("http");

var app = express();

http.createServer(app).listen(8080, function() {
    console.log("The application is running on port 8080!");
});