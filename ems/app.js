var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var mongoose = require("mongoose");
var mongoDB = "mongodb://smaft:smaft1@ds145752.mlab.com:45752/ems";
var Employee = require("./models/employee");

// Express App
var app = express();

// Morgan Logger
app.use(logger("short"));

// Security
var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: true });
app.use(helmet.xssFilter());
app.use(parseForm);
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(req, res, next) {
    let token = req.csrfToken();
    res.cookie("XSRF-TOKEN", token);
    res.locals.csrfToken = token;
    next();
});

// Static Files
app.use(express.static(__dirname));

// View Engine
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// Express Routing
app.get("/", function(req, res) {
    res.render("index", {
        title: "Home Page"
    });
});

app.get("/list", function(req, res) {
    Employee.find({}, function(error, emps) {
        if(error) throw error;

        res.render("list", {
            title: "Employee List",
            employees: emps
        });
    });
});

app.get("/new", function(req, res) {
    res.render("new", {
        title: "Add New Employee",
        csrfToken: req.csrfToken()
    });
});

app.post("/process", function(req, res) {
    if (!req.body.txtName) {
        res.status(400).send("Entries must have a name!");
        return;
    }

    let empName = req.body.txtName;
    console.log(empName);

    let emp = new Employee({
        name: empName
    });

    emp.save(function(error) {
        if(error) throw error;
        console.log(empName + " saved successfully!");
    });

    res.redirect("/list");
});

app.get("/view/:queryName", function(req, res) {
    let qn = req.params.queryName;
    Employee.find({ "name": qn }, function(error, emps) {
        if(error) throw error;
        console.log(emps);
        if(emps.length > 0) {
            res.render("view", {
                title: "Employee Record",
                employee: emps[0]
            });
        }
        else {
            res.redirect("/list");
        }
    });
});

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

// HTTP Server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});