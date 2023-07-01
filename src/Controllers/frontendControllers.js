const User = require("../models/users");

// Load Home Page
exports.home = async(req, res) => {
  try {
    const data = await User.findOne({email:'yajindragtm@gmail.com'});
    const bradcrum ={
        title:"Yajindra Gautam",
        url: "/",
        short: "account"
    }
    return res.render("frontend/index.ejs",{data,bradcrum});
  } catch (err) {
    console.log(err);
  }
};
