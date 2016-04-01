var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt-nodejs'),
    passportLocalMongoose = require('passport-local-mongoose'),
    liftSchema = require('../schemas/userLiftSchema.js'),
    userTemplateLiftSchema = require('./userLifts.js'),
    SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    username: { type: String, required: true, index: {  sparse: true }, unique: true },
    password: { type: String, required: true, index: {  sparse: true } },
    sundayLifts: [liftSchema],
    mondayLifts: [liftSchema],
    tuesdayLifts: [liftSchema],
    wednesdayLifts: [liftSchema],
    thursdayLifts: [liftSchema],
    fridayLifts: [liftSchema],
    saturdayLifts: [liftSchema],
    templateLifts: [{type: Schema.Types.ObjectId, ref: 'UserLift'}],
    admin: { type: Boolean, default: false}
});

UserSchema.plugin(passportLocalMongoose);

UserSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
