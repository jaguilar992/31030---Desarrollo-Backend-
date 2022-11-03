require("dotenv").config();
const MY_EMAIL_ADDRESS = process.env.MY_EMAIL_ADDRESS;
const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
      user: MY_EMAIL_ADDRESS,
      pass: GMAIL_PASSWORD
  }
});

const recipient = "saloli3823@keshitv.com"

const mailOptions = {
  to: recipient,
  from: "andy56@ethereal.email",
  subject: "Correo de prueba con archivos adjuntos",
  html: "<h1>Bienvenido a Nodemailer con Ethereal</h1><br><p>Este es el tercer mensaje</p>",
  attachments: [
    {path: "./imagen.png"}
  ]
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

