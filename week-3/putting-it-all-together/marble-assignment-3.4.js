let express = require("express");
let http = require("http");
let path = require("path");
let logger = require("morgan");

let app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("dev"));

app.get("/",function(req, res){
    response.render("index",function(){
        message:"home page"
    });
});
app.get("/about",function(req, res){
    response.render("about",function(){
        message:"about page"
    });
});
app.get("/contact",function(req, res){
    response.render("contact",{
        message:"contact page"
    });
});
app.get("/header",function(req, res){
    response.render("header",function(){
        message:"header page"
    });
});
app.get("/footer",function(req, res){
    response.render("footer",function(){
        message:"footer page"
    });
});
app.get("/products",function(req, res){
    response.render("products",function(){
        message:"products page"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080.");
});