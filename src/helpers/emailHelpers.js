const nodemailer = require("nodemailer");

const USERNAME = process.env.EMAIL_USERNAME;
const PASSWORD = process.env.EMAIL_PASSWORD;
const HOST = process.env.MAIL_HOST;
const PORT = process.env.EMAIL_PORT;

const sendVerificationToken = async(token) => {
    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: HOST,
            port: PORT,
            secure: false, // true for 465, false for other ports
            // service:"gmail",
            auth: {
                user: USERNAME, // generated ethereal user
                pass: PASSWORD, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `support@yajindragautam.com.np`, // sender address
            to: "yajindragtm@gmail.com", // list of receivers
            subject: "Password Reset E-mail", // Subject line
            text: "Following is your token to reset your password", // plain text body
            html: `<b>Your Password Reset Token Is : ${token}
                    Click this url : ${process.env.CMSURL}:${process.env.PORT}/reset/${token}
                    </b>`, // html ,
        });
        console.log('Password Reset Token Email Sent Success..');
    } catch (err) {
        console.log(err);
    }
}

module.exports = {sendVerificationToken}