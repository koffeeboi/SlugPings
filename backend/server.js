'use strict'

var express = require('express');
var session = require("express-session");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var MongoStore = require("connect-mongo")(session);
var path = require('path');

var app = express();

var port = process.env.NODE_ENV == "dev" ? 3001 : process.env.PORT;

var mongoDB = process.env.MLAB;
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", () => {
  console.log("databased connected to " + mongoDB);
})
db.on("connected", () => {
  console.log("database connected to " + mongoDB);
});

//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use(session({
  secret: "my precious secrets",
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  }),
}))

if (process.env.NODE_ENV == "prod")
  app.use(express.static(path.join(__dirname, "../build")));

var routes = require("./routes/router");
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

//starts the server and listens for requests
var server = app.listen(port, function () {
  console.log(`api running on port ${port}`);
});


var socket = require("socket.io");
var io = socket(server);

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', (data) => {
    io.emit("RECEIVE_MESSAGE", data);
  });
});