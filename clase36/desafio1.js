require("dotenv").config();
const MY_PHONE = process.env.MY_PHONE;

const sid = "AC7ff1d3d2460c6a05c0147a5b5b2cf72d";
const token = "2969aba9ae569cd3d8d4fd3115e20680";
const twilio = require("twilio");
const client = twilio(sid, token);

const argv = process.argv.slice(2);
const PHONE_NUMBER = argv[0] || MY_PHONE;
const MESSAGE = argv[1];

const smsOptions = {
  from: "whatsapp:+14155238886",
  to: `whatsapp:${PHONE_NUMBER}`, // whatsapp:+504XXXXXXXX
  body: MESSAGE,
  // mediaUrl: ["http://jornadasciberseguridad.riasc.unileon.es/archivos/ejemplo_esp.pdf"]
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
