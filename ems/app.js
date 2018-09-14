var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var mongoose = require("mongoose");
var mongoDB = "mongodb://smaft:smaft1@ds145752.mlab.com:45752/ems";
var Employee = require("./models/employee");

// Mongo Connection 
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance.");
});

// Express App
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.use(helmet.xssFilter());

app.use(express.static(__dirname));

//Express Routing
app.get("/", function(req, res) {
    res.render("index", {
        title: "Home Page",
        message: "XSS Prevention Example"
    });
});

app.get("/list", function(req, res) {
    res.render("list", {
        title: "Employee List"
    });
});

app.get("/new", function(req, res) {
    res.render("new", {
        title: "Add Employee"
    });
});

//Create Employee
var employee = new Employee({
    firstName: "Em",
    lastName: "Ployee"
});

// HTTP Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});