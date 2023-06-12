const User = require("../models/users");
const bcrypt = require("bcryptjs");

// Load HLogin Page
exports.loadLoginPage = (req, res) => {
    try {
      return res.render("backend/pages/auth/login.ejs");
    } catch (err) {
      console.log(err);
    }
};
// Load Forgot Password Page
exports.loadForgotPassPage = (req, res) => {
    try {
      return res.render("backend/pages/auth/forgot.ejs");
    } catch (err) {
      console.log(err);
    }
};

// Load Verify Password Page
exports.loadVerifyPassPage = (req, res) => {
    try {
      return res.render("backend/pages/auth/verify.ejs");
    } catch (err) {
      console.log(err);
    }
};
// Load Reseat Password Pge
exports.loadResetPassPage = (req, res) => {
    try {
      return res.render("backend/pages/auth/reset.ejs");
    } catch (err) {
      console.log(err);
    }
};

// Login
exports.login = async(req,res) =>{
  try {
    // Take user email and password
    // check if the user exit or not using email
    // if available then hash the password and check the password
    // update req.session.isLoggedIn to true
    const data = new User({
      email: req.body.email,
      password:req.body.password
    })
    const checkUser = await User.findOne({email:data.email});
    if(!checkUser){
      req.flash("error_msg","Sorry, You are not registered..!")
      return res.redirect("back");
    }
    const matchPass = await data.validatePassword(data.password,checkUser.password);
    if(matchPass !== true){
      req.flash("error_msg","Invalid password or email..!")
      return res.redirect("back");
    }
    req.session.isLogged = true;
    return res.redirect("/dashboard");

  } catch (err) {
    console.log(err);
  }
}