var fruits = require("../smith-fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits("Starfruit,Pomegranate,Avocado");
        assert(Array.isArray(f));
    });
});