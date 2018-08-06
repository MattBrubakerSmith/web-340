var Express = require("express");
var Http = require("http");

var app = Express();

app.use(function(req, res) {
    console.log("In comes a request to: " + req.url);
    res.end("Hello World");
});

Http.createServer(app).listen(8080);