require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");
const ejs = require("ejs");
const path = require("path");

const loadExpress = {};
loadExpress.init = (app) =>{
    //Globle Middlewares
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

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.ENV_NODE !== "development", // if true only transmit cookie over https
      httpOnly: true, // if true prevent client side JS from reading the cookie
      maxAge: 100 * 1000, // session max age in miliseconds
    },
  })
);

// Used Routes
require('../Routes')(app);
}

module.exports = loadExpress;