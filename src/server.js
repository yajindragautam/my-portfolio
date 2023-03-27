const express = require('express');
const loaders = require('./loaders');

function createServer(){
  const app = express();
  loaders.init(app);
  return app;
}

module.exports =  createServer;