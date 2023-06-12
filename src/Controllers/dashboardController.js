exports.loadDashboard = (req, res) => {
    try {
        return res.render('backend/pages/dashboard.ejs');
    } catch (err) {
        console.log(err);        
    }
};