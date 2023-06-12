const express = require('express');
const Route = express.Router();
const {loadLoginPage,loadForgotPassPage,loadVerifyPassPage,loadResetPassPage} = require('../../Controllers/authControllers');

//Fetch Login Routes
Route.get('/yg_admin',loadLoginPage);

// Get Forgot Password
Route.get('/forgot',loadForgotPassPage)

//GET Verify Password
Route.get('/verify',loadVerifyPassPage)

//GET Reset Password
Route.get('/reset',loadResetPassPage)


module.exports = Route;