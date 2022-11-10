require("dotenv").config();
const MY_PHONE = process.env.MY_PHONE;

const sid = "AC7ff1d3d2460c6a05c0147a5b5b2cf72d";
const token = "2969aba9ae569cd3d8d4fd3115e20680";


const twilio = require("twilio");
const client = twilio(sid, token);

const smsOptions = {
  from: "whatsapp:+14155238886",
  to: `whatsapp:${MY_PHONE}`, // whatsapp:+504XXXXXXXX
  body: "PDF de Ejemplo",
  mediaUrl: [
    "http://jornadasciberseguridad.riasc.unileon.es/archivos/ejemplo_esp.pdf",
  ]
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