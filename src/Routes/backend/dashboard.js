const express = require('express');
const Route = express.Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {loadDashboard, loadOverview,loadProfileSetting,updateProfileIno} = require('../../Controllers/dashboardController');


// GET: dashboard
Route.get('/dashboard',loadDashboard);

// GET: profile overview
Route.get("/overview",loadOverview);

// GET: setting
Route.get("/profile-setting",loadProfileSetting);

//
Route.put("/profile-setting",updateProfileIno);


module.exports = Route;