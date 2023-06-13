const express = require('express');
const Route = express.Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {loadLoginPage,loadForgotPassPage,loadVerifyPassPage,loadResetPassPage,login,forgotPassword,resetPassword} = require('../../Controllers/authControllers');

//Fetch Login Routes
Route.get('/yg_admin',loadLoginPage);

//POST login
Route.post("/yg_admin",login);

// Get Forgot Password
Route.get('/forgot',loadForgotPassPage);

// Forgot password
Route.post('/forgot',forgotPassword)

//GET Verify Password
// Route.get('/verify',loadVerifyPassPage)

//GET Reset Password
Route.get('/reset/:token',loadResetPassPage)

//POST new Password
Route.post('/reset/:token',resetPassword)


module.exports = Route;