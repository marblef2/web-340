/*
============================================
; Title:  Marble Exercise 1.3
; Author: Professor Krasso
; Modified By: Fred Marble
; Date:   08 January 2021
; Description: Demonstrates how to parse a Node.js URL
;===========================================
*/

//Requires the URL
const url = require("url");

//Parsing the URL
const parsedURL = url.parse("https://www.youtubue.com/profile?name=spedicey");

// Display of the URL.
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
