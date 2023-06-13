const isLoggedIn = async (req, res, next) => {
  if (req.session.isLogged) {
    return next();
  } else {
    if (req.xhr) {
      return res.status(401).json({ message: "Unauthenticated." });
    } else {
        req.flash("error_msg","You are not authorized..!")
      return res.redirect("/yg_admin");
    }
  }
};

module.exports = isLoggedIn