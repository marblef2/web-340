let express = require("express");
let http = require("http");
let path = require("path");
let logger = require("morgan");
let mongoose = require("mongoose");
let helmet=require("helmet");
let cookieParser = require('cookie-parser');
let csrf = require('csurf');
let Employee = require("./models/employee")
let mongoDB ='mongodb+srv://admine:admine@buwebdev-cluster-1.qys8r.mongodb.net/test';
mongoose.connect(mongoDB,{
    
});

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});

let app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

let emp = Employee({
    firstName: "John",
    lastName: "Wick"
});
// CSRF protection
app.use(csrfProtection);
// Cookie parser
app.use(cookieParser());

app.use(function(req, res, next) {
    var token = req.csrfToken();
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
  });

  app.get("/", function(request, response) {

    response.render("index", {

        message: "New Fruit Entry Page"

    });

});

app.post("/process", function(request, response) {

    console.log(request.body.txtName);

    response.redirect("/");

});

app.get("/", function (request, response) {

    response.render("index", {

        message:"Xss Prevention Example"

    });

});

app.post("/process", function(request, response) {

    // console.log(request.body.txtName);
 
    if (!request.body.txtName) {
 
        response.status(400).send("Entries must have a name");
 
        return;
 
    }
 
    // get the request's form data
 
    var employeeName = request.body.txtFirstName + ' ' + txtLastName;
 
    console.log(employeeName);
 
 
    // save
 
    employee.save(function (error) {
 
        if (error) throw error;
 
        console.log(employeeName + " saved successfully!");
 
    });
 
    response.redirect("/");
 
 });
 

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});