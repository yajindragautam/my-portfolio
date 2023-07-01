const User = require("../models/users");
const {uploadFileToPath} = require("../helpers/fileHelpers");

// Render login page
exports.loadDashboard = async(req, res) => {
    try {
        const bradcrum ={
            title:"Dashboard",
            url: "/dashboard",
            short: "dashboard"
        }
        const data = await User.findOne({email:"yajindragtm@gmail.com"});
        return res.render('backend/pages/dashboard.ejs',{data,bradcrum});
    } catch (err) {
        console.log(err);        
    }
};

// Render profile overview page
exports.loadOverview = async(req, res) => {
    try {
        const data = await User.findOne({email:"yajindragtm@gmail.com"});
        const bradcrum ={
            title:"Account Overview",
            url: "/overview",
            short: "account"
        }
        return res.render('backend/pages/overview.ejs',{data,bradcrum});
    } catch (err) {
        console.log(err);        
    }
};

// Render profile setting page

exports.loadProfileSetting = async(req, res) => {
    try {
        const data = await User.findOne({email:"yajindragtm@gmail.com"});
        const bradcrum ={
            title:"Account Setting",
            url: "/profile-setting",
            short: "setting"
        }
        return res.render('backend/pages/setting.ejs',{data, bradcrum});
    } catch (err) {
        console.log(err);        
    }
};

exports.updateProfileInfo = async(req, res) => {
    try {
        const userData = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            company: req.body.company,
            bio: req.body.bio,
            aboutme: req.body.aboutme,
            phone: req.body.phone,
            nationality: req.body.phone,
            earning: req.body.earning,
            success_rate: req.body.success_rate,
        }
        if(req.files?.image){
            const newName = uploadFileToPath({file: req.files.image, absDir:'profile/'});
            userData.image = newName;
        }
        const data = await User.findOneAndUpdate({email:"yajindragtm@gmail.com"}, userData);
        const bradcrum ={
            title:"Account Setting",
            url: "/profile-setting",
            short: "setting"
        }
        return res.render('backend/pages/setting.ejs',{data, bradcrum});
    } catch (err) {
        console.log(err);        
    }
};