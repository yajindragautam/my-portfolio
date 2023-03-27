const express = require('express');
const Route = express.Router();
const {home} = require('../../Controllers/frontendControllers');

// Frontend Routes
Route.get('/',home);


module.exports = Route;