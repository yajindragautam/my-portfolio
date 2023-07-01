const express = require('express');
const Router = express.Router();
const app = require('../app');

module.exports = (app)=>{
    app.use(require('./frontend'));
    app.use(require('./backend'));
    app.use(require('./backend/dashboard'));
    app.use(require('./backend/skills'));
}