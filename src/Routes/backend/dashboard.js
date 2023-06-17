const express = require('express');
const Route = express.Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {loadDashboard, loadOverview,loadProfileSetting,updateProfileInfo} = require('../../Controllers/dashboardController');

// GET: dashboard
Route.get('/dashboard',loadDashboard);

// GET: profile overview
Route.get("/overview",loadOverview);

// GET: setting
Route.get("/profile-setting",loadProfileSetting);

//
Route.post("/profile-setting",updateProfileInfo);


module.exports = Route;