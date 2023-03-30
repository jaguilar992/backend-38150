const nodemailer = require("nodemailer");
const argv = process.argv.slice(2);
dotenv.config()

const SMTP_EMAIL = process.env.SMTP_EMAIL;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

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
  subject: "Prueba de envio de correo electronico (Backend 38150)",
  html: "<h1>Hola Mundo!</h1>",
  attachments: [
    {path: './panas-gatitos.jpeg'}
  ]
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