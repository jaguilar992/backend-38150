const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const argv = process.argv.slice(2);
dotenv.config()

const SMTP_EMAIL = process.env.SMTP_EMAIL;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const RECIPIENT_EMAIL = argv[0] || process.env.SMTP_EMAIL;
const subject = argv[1] || "Un saludo";
const html = argv[2] || "<h1>Hola Mundo!</h1>";

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: process.env.SMTP_PORT,
  auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
  }
});

const mailOptions = {
  from: "Coder Backend",
  to: RECIPIENT_EMAIL,
  subject,
  html,
}

async function sendMailFromNodeMailer() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info)
  } catch(err) {
    console.log(err);
  }
}

sendMailFromNodeMailer()
.then(() => process.exit(0))
.catch(err => console.log(err))