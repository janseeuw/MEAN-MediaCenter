var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title: String,
  thumb: String,
  path: String
});

mongoose.model('Movie', MovieSchema);