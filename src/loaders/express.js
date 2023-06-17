require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const methodOverride = require("method-override");
const ejs = require("ejs");
var flash = require('connect-flash');
const path = require("path");



const loadExpress = {};
loadExpress.init = (app) =>{
    //Globle Middlewares
const{mongoose} = require("../config/db"); 
// Load seeder
require("../seeds/index")
// Resources path middleware
app.use(express.static(path.join(__dirname, "../../public")));
// Template Engine Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cookieParser());
// override with different headers; last one takes precedence

// override with POST having ?_method=DELETE
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENVTRONMENT !== "development", // if true only transmit cookie over https
      httpOnly: true, // if true prevent client side JS from reading the cookie
      maxAge: 3000 * 1000, // session max age in miliseconds
    },
  })
);

// Connet Flash
app.use(flash());

// Global variable
app.use(function(req, res, next){
  app.locals.csrfToken = '6hrFDATxrG9w14QY9wwnmVhLE0Wg6LIvwOwUaxz7';
  res.locals['success_msg'] = req.flash('success_msg');
  res.locals['error_msg'] = req.flash('error_msg');
  res.locals.errors = req.flash();
  res.locals.session = req.session;
  res.locals.session.isLogged = req.session.isLogged ||  false;
  res.locals.user = req.user || null;

  next();
});



// Used Routes
require('../Routes')(app);
}

module.exports = loadExpress;