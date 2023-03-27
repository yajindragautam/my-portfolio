const express = require('express');
const Router = express.Router();
const app = require('../app');

module.exports = (app)=>{
    app.use(require('./frontend'));
}