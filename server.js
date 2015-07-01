//var underscore = require('underscore');
var express = require('express');
var app = express();
// var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
// database connection vars
// var db_prod = 'mongodb://mongo:mongodb1@ds037622.mongolab.com:37622/heroku_v52rd94l';
// var db_dev = 'mongodb://localhost:27017/Task_app';

// db connection
// if (NODE_ENV === "production") {
  // Use -- PRODUCTION - HEROKU connection to mongodb with mongoose using mongolab plugin for heroku

// } else if (NODE_ENV === "") {

// } {
  // Use -- DEV - LOCAL connection to mongodb with mongoose
// mongoose.connect('mongodb://mongo:mongodb1@ds037622.mongolab.com:37622/heroku_v52rd94l');
// }


// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
//   // yay!
// });


app.use(express.static(__dirname + '/public'));  // set the static files location /public/img will be /img for users
app.use(morgan('dev'));  // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());  // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// set up Todo model
// var Todo = mongoose.model('Todo', {
//       text : String
//   });

// routes
// todos API
// get all todos
// app.get('/api/todos', function(req, res) {

//     // use mongoose to get all todos in the database
//     Todo.find(function(err, todos) {

//         // if there is an error retrieving, send the error. nothing after res.send(err) will execute
//         if (err)
//             res.send(err);

//         res.json(todos); // return all todos in JSON format
//     });
// });

// // create todo and send back all todos after creation
// app.post('/api/todos', function(req, res) {

//     // create a todo, information comes from AJAX request from Angular
//     Todo.create({
//         text : req.body.text,
//         done : false
//     }, function(err, todo) {
//         if (err)
//             res.send(err);

//         // get and return all the todos after you create another
//         Todo.find(function(err, todos) {
//             if (err)
//                 res.send(err);
//             res.json(todos);
//         });
//     });

// });

// // delete a todo
// app.delete('/api/todos/:todo_id', function(req, res) {
//     Todo.remove({
//         _id : req.params.todo_id
//     }, function(err, todo) {
//         if (err)
//             res.send(err);

//         // get and return all the todos after you create another
//         Todo.find(function(err, todos) {
//             if (err)
//                 res.send(err);

//             res.json(todos);
//         });
//     });
// });

// application -------------------------------------------------------------
app.get('*', function(req, res) {
   res.sendfile('./public/index.html'); // load the single view file 
});

// listen (start app with node server.js)
app.listen(5000);
console.log("App listening on port 5000");
