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

const argv = process.argv.slice(2);
const to = argv[0] || "saloli3823@keshitv.com";
const subject = argv[1] || "Saludo";
const html = argv[2] || "Mensaje por default";
const attachment_path = argv[3] || null;


const mailOptions = {
  to,
  from: "andy56@ethereal.email",
  subject,
  html
}

const mailOptionsConAttachments = {
  to,
  from: "andy56@ethereal.email",
  subject,
  html,
  attachments: [
    {path: attachment_path}
  ]
}

async function send() {
  try {
    const info1 = await transporter.sendMail(mailOptions);
    const info2 = await transporter.sendMail(mailOptionsConAttachments);
    console.log(info1);
    console.log(info2);
  } catch (err) {
    console.log(err);
  }
}

send();

// node desafio2.js saloli3823@keshitv.com HolaMundo "Cuerpo del email" ./imagen.png