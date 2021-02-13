let express = require('express');
let http = require('http');
let logger = require('morgan');
let mongoose = require('mongoose');

let mongoDB ='mongodb+srv://admine:admine@buwebdev-cluster-1.qys8r.mongodb.net/test';
mongoose.connect(mongoDB,{
    useMongoClient: true
});

mongoose.Promise = global.Promise;

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error: '));
db.once('open', function(){
    console.log('Application connected to mLab');
});

let app = express();
app.use(logger('dev'));

http.createServer(app).listen(5000, function (){
    console.log('Application started and listening on port 5000.');
});