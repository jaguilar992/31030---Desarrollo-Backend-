require("dotenv").config();
const MY_EMAIL_ADDRESS = process.env.MY_EMAIL_ADDRESS;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'andy56@ethereal.email',
      pass: 'Zr3feNnvuFN2YJNqmW'
  }
});

const recipient = "saloli3823@keshitv.com"

const mailOptions = {
  to: recipient,
  from: "andy56@ethereal.email",
  subject: "Correo de prueba #2",
  html: "<h1>Bienvenido a Nodemailer con Ethereal</h1><br><p>Este es el segundo mensaje</p>"
}

async function send() {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(info);
  } catch (err) {
    console.log(err);
  }
}

send();

