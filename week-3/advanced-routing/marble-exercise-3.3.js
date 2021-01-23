let express = require('express');
let http = require('http');
let path = require('path');
let logger = require('morgan');

let app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/:employeeId', function(req, res){
    let employeeId = parseInt(req.params.employeeId, 10);

    res.render('index', {
        employeeId: employeeId
    });
});

http.createServer(app).listen(3001, function(){
    console.log('Application started and listening on port %s', 3001);
});