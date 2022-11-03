// require("dotenv").config();
// const MY_EMAIL_ADDRESS = process.env.MY_EMAIL_ADDRESS;
// const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;

const argv = process.argv.slice(2);
const to = argv[0] || "saloli3823@keshitv.com";
const subject = argv[1] || "Saludo";
const html = argv[2] || "Mensaje por default";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'andy56@ethereal.email',
      pass: 'Zr3feNnvuFN2YJNqmW'
  }
});

const mailOptions = {
  to,
  from: "andy56@ethereal.email",
  subject,
  html
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

// node desafio1.js saloli3823@keshitv.com HolaMundo "<img src='https://static.javatpoint.com/tutorial/computer-network/images/pop-protocol.png'/>"