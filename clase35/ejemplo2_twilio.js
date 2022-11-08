require("dotenv").config();
const MY_PHONE = process.env.MY_PHONE;

const sid = "AC7ff1d3d2460c6a05c0147a5b5b2cf72d";
const token = "c9b2b02eb24f584dda2af2facebc19cf";


const twilio = require("twilio");
const client = twilio(sid, token);

const smsOptions = {
  from: "+13609941323",
  to: "MY_PHONE", // +504XXXXXXXX
  body: "Hola desde Twilio & NodeJS - Mensaje2"
}

async function send() {
  try {
    const info = await client.messages.create(smsOptions);
    console.log(info);
  } catch(err) {
    console.log(err)
  }
}

send();