const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const argv = process.argv.slice(2);
dotenv.config()

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;
const RECIPIENT_EMAIL = argv[0] || process.env.SMTP_EMAIL;
const subject = argv[1] || "Un saludo";
const html = argv[2] || "<h1>Hola Mundo!</h1>";
const filePath = argv[3];

const hasAttachments = filePath ? true : false;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: process.env.SMTP_PORT,
  auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
  }
});

const mailOptions = {
  from: "Coder Backend",
  to: RECIPIENT_EMAIL,
  subject,
  html,
  attachments: hasAttachments ? [{path: filePath}] : undefined
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