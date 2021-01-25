const { response } = require("express");
let express = require("express");
let http = require("http");

let app = express();

app.get("/not-found", function(req, res){
    res.status(404);

    res.json({
        error:"File Not Found."
    })
});

app.get("/ok", function(req, res){
    res.status(200);

    res.json({
        message:"Congratulations, the page loaded correctly"
    })
});

app.get("/not-implemented", function(req, res){
    res.status(501);
    res.json({
        error:"Requested Page is not created."
    })
});

http.createServer(app).listen(8080, function(){
    console.log("Application has started on port 8080!");
});