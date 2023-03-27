// Load Home Page
exports.home = (req, res) => {
  try {
    return res.render("frontend/index.ejs");
  } catch (err) {
    console.log(err);
  }
};
