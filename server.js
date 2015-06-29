// set up ========================
require('underscore');
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');        // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)


// configuration =================
// -- DEV - LOCAL connection to mongodb with mongoose
mongoose.connect('mongodb://localhost:27017/Task_app');
// -- DEPLOY - HEROKU connection to mongodb with mongoose using mongolab plugin for heroku
// mongoose.connect('mongodb://node:nodeuser@localhost:27017/');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
//   // yay!
// });


app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// listen (start app with node server.js)
app.listen(3000);
console.log("App listening on port 3000");
