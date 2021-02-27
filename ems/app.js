let express = require("express");
let http = require("http");
let path = require("path");
let logger = require("morgan");
let mongoose = require("mongoose");
let helmet=require("helmet");
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

app.get("/", function (request, response) {

    response.render("index", {

        message:"Xss Prevention Example"

    });

});

http.createServer(app).listen(8080, function() {

    console.log("Application started on port 8080!");

});