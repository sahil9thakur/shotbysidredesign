import aysncHandler from "express-async-handler";
import nodemailer from "nodemailer";

// @desc    Send Email Inquiry
// @route   POST /api/contact
// @access  Public

const sendEmailInquiry = aysncHandler(async (req, res) => {
    // console.log("backend email called");
    const { name, email, message } = req.body;
    const transporter = nodemailer.createTransport({
        // service: "Gmail",
        host: 'smtp.gmail.com',
        auth: {
            type: "login",
            user: process.env.SBS_EMAIL_ADDRESS,
            pass: process.env.SBSEMAIL_PASSWORD,
            // user: "shotbysidweb@gmail.com",
            // pass: "Ikeepforgettingit$id",
        },
    });
    // console.log(user);
    // console.log(pass);
    console.log(process.env.SBS_EMAIL_ADDRESS);
    console.log(process.env.SBS_EMAIL_PASSWORD);
    const mailOpts = {
        from: email,
        to: process.env.SBS_EMAIL_ADDRESS,
        // to: "shotbysidweb@gmail.com",
        replyTo: email,
        subject: `Inquiry from: ${name}<${email}>`,
        text: `${name} <${email}> has 
            left a message using the website form.
            Here is the message:
            
            "${message}"`,
    };
    transporter.sendMail(mailOpts, (error, response) => {
        if (error) {
            console.log(error);
            res.status(500).json({ message: "Server Error! Try Later." });
        } else {
            res.status(200).json({ message: "Email Sent!" });
        }
    });
});

export { sendEmailInquiry };
