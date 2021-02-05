//Require Statements
let express = require('express');
let http = require('http');
let path = require('path');
let pug = require('pug');

//App Creation
let app = express;
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

//Routing
app.get('/', function(req, res){
    res.render('index',{
        message: 'Listen to the dogs, they know what they are talking about. -Fred Marble'
    });
});

//Create Server
http.createServer(app).listen(8080, function(){
    console.log('Application has began on port 8080!')
});