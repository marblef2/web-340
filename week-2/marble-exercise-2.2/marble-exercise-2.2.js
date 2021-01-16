/*
============================================
; Title:  Marble Exercise 2.2
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   16 January 2021
; Description: Hello World with Express.JS
;===========================================
*/

//Requirement for Express.js
let express = require('express');

//Requires HTTP.
let http = require('http');

//Denotes what the app will be using.
let app = express();

//Creating the app, and pushing the results to console.log.
app.use(function(req, res)
{
    console.log('In comes a request to: %s', req.url);

    res.end('Hello World\n');

})

//Listening for the Server to be created on 8080.
http.createServer(app).listen(8080, function()
{
    console.log('Application started on port %s', 8080);
})