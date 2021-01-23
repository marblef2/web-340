let express = require('express');
let http = require('http');
let path = require('path');
let logger = require('morgan');

let app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/', function (req, res){
    res.render('index', {
        message: 'Welcome to an example of Morgan Logging'
    });
});

http.createServer(app).listen(3000, function (){
    console.log('Application started and listening on port %s', 3000);
});