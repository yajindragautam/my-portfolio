'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String, unique: true, index: true, default:"yajindragtm@gmail.com"},
    username: {type: String, unique: true, index: true},
    image: {type: String, default: ''},
    phone:{type:String, unique:true,index:true},
    address:{type:String, default:''},
    nationality:{type:String, default:''},
    password: {type: String},
    resetPasswordToken: {type: String},
    resetPasswordExpires: {type: Date},
    verified: {type: Boolean, default: true},
    last_accessed_ip: {type: String, default: ''},
    global_security_setting: {type: String, default: ''},
    login_setting: {type: String, default: 'no_authentication'},
    last_accessed_city: {type: String, default: ''},
    password_method: {type: String, default: ''},
    last_accessed_country: {type: String, default: ''},
});

/**
 * Hash the password and sms token for security.
 */

// UserSchema.pre('save', function (next) {
//     var user = this;
//     if (!user.isModified('password')) return next();
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(user.password, salt, (err, hash) => {
//             user.password = hash;
//             next();
//         });
//     });
// });

/**
 * Check the user's password
 */



module.exports = mongoose.model('User', UserSchema);
