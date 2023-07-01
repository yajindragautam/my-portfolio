const User = require("../models/users");
const Skill = require("../models/skills");

// Load Skill index page
exports.loadSkillsPage = async(req,res) =>{
    const data = await User.findOne({email:"yajindragtm@gmail.com"});
    const bradcrum ={
        title:"Skills Overview",
        url: "/skills",
        short: "skills"
    }
    return res.render('backend/pages/skills/index.ejs',{data, bradcrum});
}

// Load create page
exports.loadSkillsCreatePage = async(req,res) =>{
    const data = await User.findOne({email:"yajindragtm@gmail.com"});
    const bradcrum ={
        title:"Create Skills",
        url: "/skills/create",
        short: "skills"
    }
    return res.render('backend/pages/skills/add.ejs',{data,bradcrum});
}

// Create Skills
exports.CreateSkills = async(req,res) =>{
    try {
        const data = {
            name:req.body.name,
            percentage: req.body.percentage,
            status: req.body.status,
        };
        req.body.status === "on" ? data.status = true : data.status = false;
        await Skill.create(data);
        req.flash("success_msg","Your skill created successfully !");
        return res.redirect("/skills");
        console.log('checking skills', data);
    } catch (err) {
        console.log(err);
    }

}