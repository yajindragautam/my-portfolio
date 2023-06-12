const express = require('express');
const Route = express.Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {loadDashboard} = require('../../Controllers/dashboardController');


// GET: dashboard
Route.get('/dashboard',[isLoggedIn],loadDashboard);


module.exports = Route;