/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 1 August 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to include modules.
;===========================================
*/

// Creates header
var header = require('../header.js');
console.log(header.display("Matthew", "Smith", "Exercise 1.3"));

var url = require("url");
var parsedURL = url.parse("https://www.definitelyreal.com/profile?name=actually-is-smith");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);