const User = require("../models/users");

// Render login page
exports.loadDashboard = (req, res) => {
    try {
        return res.render('backend/pages/dashboard.ejs');
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

exports.updateProfileIno = async(req, res) => {
    try {
        const userData = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            company: req.body.company,
            phone: req.body.phone,
            nationality: req.body.phone,
            earning: req.body.earning,
            success_rate: req.body.success_rate,
            
        }
        console.log("checking user data >",userData);
        console.log('check image file ',req.file);
        console.log('check image files ',req.files);
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