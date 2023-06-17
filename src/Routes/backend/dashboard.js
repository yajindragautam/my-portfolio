const express = require('express');
const Route = express.Router();
const multer = require('multer');
const isLoggedIn = require('../../middlewares/isLoggedIn');
const {loadDashboard, loadOverview,loadProfileSetting,updateProfileIno} = require('../../Controllers/dashboardController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '/img/uploads/profile'); // Specify the destination folder
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

// GET: dashboard
Route.get('/dashboard',loadDashboard);

// GET: profile overview
Route.get("/overview",loadOverview);

// GET: setting
Route.get("/profile-setting",loadProfileSetting);

//
Route.put("/profile-setting", upload.single('image'),updateProfileIno);


module.exports = Route;