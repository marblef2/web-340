const { response } = require("express");
let express = require("express");
let http = require("http");
let app = express();

app.get("/customer/:id", function(req, res){
    let id = parseInt(req.params.id, 10);

    res.json({
        firstName:"Lenoard",
        lastName:"Nemoy",
        employeeId: id
    });

});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});
