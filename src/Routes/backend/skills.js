const express = require('express');
const Route = express.Router();
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {loadSkillsPage,loadSkillsCreatePage,CreateSkills} = require('../../Controllers/skillController');

//Fetch Login Routes
Route.get('/skills',loadSkillsPage);

// Get: create skill page
Route.get('/skills/create',loadSkillsCreatePage);

// Post: create skill
Route.post('/skills', CreateSkills);



module.exports = Route;