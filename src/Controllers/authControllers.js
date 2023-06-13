const User = require("../models/users");
const moment = require('moment');
const  {generateRandomNumber,hashPassword} = require("../helpers/commonHelpers");
const {sendVerificationToken} = require("../helpers/emailHelpers");
const bcrypt = require("bcryptjs");

// Load HLogin Page
exports.loadLoginPage = (req, res) => {
    try {
      if(req.session.isLogged){
        return res.redirect("/dashboard");
      }
      return res.render("backend/pages/auth/login.ejs");
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

// Load Forgot Password Page
exports.loadForgotPassPage = (req, res) => {
    try {
      return res.render("backend/pages/auth/forgot.ejs");
    } catch (err) {
      console.log(err);
    }
};

// Forgot Password
exports.forgotPassword = async(req,res)=>{
  try {
    // Get email from body and check if the email exit or not
    // If false throw error "Your email is not registered"
    // If yes generate 6 digits random token
    // Send that token to user email
    // Update token and token expiry time
    const {email} = req.body;
    const data = await User.findOne({email:email});
    if(!data){
      req.flash("error_msg","Your Email Is Not Registered In The System..!");
      return res.redirect('back');
    }

    const token = generateRandomNumber();
    await sendVerificationToken(token);
    const linkExpiryTime = process.env.LINK_EXPIRY_TIME || 20;
    let expiryDate = moment().add(linkExpiryTime, "m");
    let updateData = {
      'resetPasswordToken': token,
      'resetPasswordExpires': expiryDate
    };

    await User.findOneAndUpdate({_id:data._id},updateData);
    req.flash("success_msg","Email Sent Success. Check your Email?");
    return res.redirect('back');
  } catch (err) {
    console.log(err);
  }
}

// Load Reseat Password Pge
exports.loadResetPassPage = async(req, res) => {
    try {
      if(req.session.user){
        return res.redirect("/yg_admin");
      }
      const token = req.params.token;
      const currentDate= new Date();
      const user = await User.findOne({resetPasswordToken:token});
      // Check if the token is expired or not 
      // If yes send to login 
      if((user.resetPasswordToken === token) &&(currentDate < user.resetPasswordExpires) ){
        return res.render("backend/pages/auth/reset.ejs",{token});
      }else{
        req.flash("error_msg","Reset Password Is Expired or Invalid..");
        return res.redirect("/yg_admin");
      }
      
    } catch (err) {
      console.log(err);
    }
};


exports.resetPassword = async(req,res)=>{
  try {
    if(req.session.user){
      return res.redirect("/yg_admin");
    }
    const token = req.params.token;
    const currentDate= new Date();
    const user = await User.findOne({resetPasswordToken:token});
    if (user && user.resetPasswordToken !== token) {
      req.flash('error_msg', 'Invalid Token');
      let url = '/wp_admin';
      return res.redirect(url);
    }

    if (user && user.resetPasswordExpires !== null && currentDate > user.resetPasswordExpires) {
      req.flash('error_msg', 'Reset link is invalid or expired.');
      req.flash('error_msg', 'Invalid Token');
      let url = '/wp_admin';
      return res.redirect(url);
    }

    // Take password from body
    // Check if the password are same
    // Update the password
    const {password,confirmPassword} = req.body;
    if(password !== confirmPassword){
      req.flash("error_msg","Password and Conform Password Do't Matched");
      return res.redirect('back');
    }
    const hashedPass = await hashPassword(password);
    const updateData = {
      password:hashedPass,
      resetPasswordToken:'',
      resetPasswordExpires:'',
      updateAt: new Date()
    }
    await User.findOneAndUpdate({_id:user._id},updateData);
    req.flash("success_msg","Password Chnaged Success");
    return res.redirect('/yg_admin');
  } catch (err) {
    console.log(err);
  }
}