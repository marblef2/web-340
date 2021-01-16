/*
============================================
; Title:  Marble Assignment 2.4
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   16 January 2021
; Description: EJS View
;===========================================
*/

//Setting up requirements
let http = require("http");
let express = require("express");
let path = require("path");

//Setting up the app.
let app = express();

//Tells Express the views are in the 'views' directory.
app.set("views", path.resolve(_dirname, "views"));

//Tell Express to use the EJS view engine
app.set('view engine', 'ejs');

//Creating the port number variable.
let PORT = 3000;

//Returns the index.ejs page.
app.get('/', function(req, res){
    res.render('index', {
      firstName : 'Annastasia',
      lastName: 'Beaverhausen',
      address: '42 Wallaby Way, Sidney, Australia'
    });
});

//Creates a new server to listen on the 3000 port.
http.createServer(app).listen(PORT, function(){
    console.log(`EJS-Views app started on port ${PORT}`);
});