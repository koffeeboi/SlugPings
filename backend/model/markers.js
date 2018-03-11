var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MarkerSchema = new Schema({
  id: { type: String },
  lat: { type: Number },
  lng: { type: Number },
  title: { type: String },
  loc: { type: String },
  startTime: { type: String },
  endTime: { type: String },
  moreInfo: { type: String },
});

module.exports = mongoose.model("Marker", MarkerSchema);