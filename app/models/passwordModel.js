var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var passportLocalMongoose = require('passport-local-mongoose');
var SALT_WORK_FACTOR = 10;

var passwordSchema = new Schema({
  password: {type: String, required: true}
})


module.exports = mongoose.model('Password', passwordSchema);
