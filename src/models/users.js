'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;
var UserSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {type: String, unique: true, index: true, default:"yajindragtm@gmail.com"},
    username: {type: String, unique: true, index: true},
    image: {type: String, default: ''},
    profile_image: {type: String, default: ''},
    phone:{type:String, unique:true,index:true},
    company:{type:String, default:""},
    job:{type:String, default:"Node Developer"},
    earning:{type:Number, default:"0"},
    projects:{type:Number, default:"0"},
    success_rate:{type:String, default:"60"},
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
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now},
    deletedAt:{type:Date, default:Date.now},
});


// Hash the password and sms token for security.
 
UserSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash;
            next();
        });
    });
});


// Compare Password
UserSchema.methods.validatePassword = async function (password, hashed) {
    try {
        const isMatch = await bcrypt.compare(password, hashed);
        console.log("Check password matched :",isMatch);
        return isMatch;
      } catch (error) {
        throw new Error('Password comparison failed');
    }
}



module.exports = mongoose.model('User', UserSchema);
