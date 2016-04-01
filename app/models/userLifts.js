var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var liftSchema = require('../schemas/userLiftSchema.js');

var userTemplateLiftSchema = new Schema({
  templateName: {type: String, required: true, index: {sparse: true}},
  lifts: [liftSchema],
  user: [{type: Schema.Types.ObjectId, ref: 'User'}]
})

module.exports = mongoose.model('UserLift', userTemplateLiftSchema);
