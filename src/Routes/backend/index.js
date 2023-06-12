const express = require('express');
const Route = express.Router();
const {loadLoginPage,loadForgotPassPage,loadVerifyPassPage,loadResetPassPage,login} = require('../../Controllers/authControllers');

//Fetch Login Routes
Route.get('/yg_admin',loadLoginPage);

//POST login
Route.post("/login",login);

// Get Forgot Password
Route.get('/forgot',loadForgotPassPage)

//GET Verify Password
Route.get('/verify',loadVerifyPassPage)

//GET Reset Password
Route.get('/reset',loadResetPassPage)


module.exports = Route;