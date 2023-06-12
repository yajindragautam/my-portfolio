const User = require('../models/users');

const userData ={
    firstname: "Yajindra",
    lastname: "Gautam",
    email: "yajindragtm@gmail.com",
    username: "yaji",
    phone:"+977-9860840626",
    address:"Tikathali,Lalitpur",
    nationality:"Nepal",
    password: "Manish.@698",
}

User.findOne({email: userData.email}).then(response => {
    if (!response) {
        const newUser = new User(userData);
        newUser.save().then(savedUser => {
        }).catch(err => {
            console.log(err);
        });
    }
});
