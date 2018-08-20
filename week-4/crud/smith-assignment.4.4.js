/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 20 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use cURL to test HTTP requests.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
    response.send("API invoked as an HTTP GET request.");
});

app.put("/", function(request, response) {
    response.send("API invoked as an HTTP PUT request.");
});

app.post("/", function(request, response) {
    response.send("API invoked as an HTTP POST request");
});

app.delete("/", function(request, response) {
    response.send("API invoked as an HTTP DELETE request");
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});