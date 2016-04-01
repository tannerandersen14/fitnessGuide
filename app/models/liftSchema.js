var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var liftSchema = new Schema({
  type: {type: String, required: true, lowercase: true},
  name: {type: String, unique: true, required: true},
  link: {type: String},
  image: {type: String, required: true},
  directions: [String]
})

module.exports = mongoose.model('Lift', liftSchema);
