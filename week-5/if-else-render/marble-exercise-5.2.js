
//Requirement Statements
let express = require('express');
let http = require('http');
let path = require('path');

//Creating App Functions
let app = express();
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

//Local Composer Array
let composers = [
    "Bach",
    "Mozart",
    "Mendelsohn",
    "Vivald"
];

//Routing 
app.get('/', function(req, res){
    res.render('index', {
        names: composers
    });
});

//Server Creation
http.createServer(app).listen(8080, function(){
    console.log('Application has started and listening on port 8080.')
});