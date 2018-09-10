/*
============================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 10 September 2018
; Modified By: Matthew Smith
; Description: This program demonstrates
; how to use Mocha for TDD.
;===========================================
*/
var assert = require("assert");

describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray("Apple,Orange,Mango".split("'")));
    });
});