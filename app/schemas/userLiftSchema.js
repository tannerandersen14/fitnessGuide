var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = new Schema({
  name: {type: String, unique: true, required: true, index: {sparse: true}},
  sets: {type: Number},
  reps: {type: Number},
  image: {type: String},
  directions: [String]
})
