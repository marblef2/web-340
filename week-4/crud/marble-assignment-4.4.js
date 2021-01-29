/*
============================================
; Title:  marble-assignment-4.4.js
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   28 February 2019
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

let express = require("express");
let http = require("http");

let app = express();

app.get("/", function(request, response) {
  response.send("API processed an HTTP GET request.");
});

app.put("/", function(request, response) {
  response.send("API has created HTTP PUT request.");
});

app.post("/", function(request, response) {
  response.send("The API has processed HTTP POST request");
});

app.delete("/", function(request, response) {
  response.send("API responded to HTTP DELETE request");
});

http.createServer(app).listen(3000, function() {
  console.log("Application started on port 8080!");
});
