/*
============================================
; Title:  Marble Exercise 2.3
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   16 January 2021
; Description: Demonstrates how to handle routes in Express.
;===========================================
*/

//Variable Creation
let express = require('express');
let http = require('http');

//App Creation
let app = express();

//Creating Route Interceptors.
app.get('/', function(req, res){
    res.end('Welcome to the homepage.\n');
});

app.get('/about', function(req, res){
    res.end('Welcome to the about page.\n');
});

app.get('/contact', function(req, res){
    res.end('Welcome to the contact page.\n');
});


//Route not found.
app.use(function (req, res){
    res.statusCode = 404;
    res.end('404!\n');
});

//Creating the Server.
http.createServer(app).listen(3000, function () {
    console.log('APplication started on port %s', 3000);
});