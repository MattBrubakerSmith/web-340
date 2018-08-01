/*
============================================
; Title: Assignment 1.5
; Author: Professor Krasso
; Date: 1 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to write a basic Node server function.
;===========================================
*/

var http = require("http");

function processRequest(req, res) {
    var body = "Be sure to tip your web server!";
    var contentLength = body.length;
    res.writeHead(200, {
        'Content-Length': contentLength,
        'Content-Type': 'text/plain'
    });
    res.end(body);
}

var s = http.createServer(processRequest);

s.listen(8080);