// var mongoose = require('mongoose');
import Mongoose from "mongoose";

var mongoDB = process.env.MLAB; console.log(process.env);
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", () => {
  console.log("databased connected to " + mongoDB);
})

console.log("server.js loaded");