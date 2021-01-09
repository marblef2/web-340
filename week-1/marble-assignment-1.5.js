/*
============================================
; Title:  Marble Assignment 1.5.js
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   09 January 2021
; Description:Building a Web Page with NodeJS
;===========================================
*/

//Declaring Variables
let http = require("http");

//Function to process the server request.
function processRequest(req, res){
    let body = "Welcome to the Wonderful World of Crocheting!";

    let contentLength = body.length;

    res.writeHead(200,{
        'Content-Length':contentLength,

        'Content-Type': 'text/plain'
    });

    res.end(body);
}

// Creation of the server to process the web page.
let x = http.createServer(processRequest);

x.listen(8080);