// Load HLogin Page
exports.loadLoginPage = (req, res) => {
    try {
      return res.render("backend/pages/auth/login.ejs");
    } catch (err) {
      console.log(err);
    }
};
// Load Forgot Password Page
exports.loadForgotPassPage = (req, res) => {
    try {
      return res.render("backend/pages/auth/forgot.ejs");
    } catch (err) {
      console.log(err);
    }
};

// Load Verify Password Page
exports.loadVerifyPassPage = (req, res) => {
    try {
      return res.render("backend/pages/auth/verify.ejs");
    } catch (err) {
      console.log(err);
    }
};
// Load Reseat Password Pge
exports.loadResetPassPage = (req, res) => {
    try {
      return res.render("backend/pages/auth/reset.ejs");
    } catch (err) {
      console.log(err);
    }
};
  