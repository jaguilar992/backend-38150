const dotenv = require("dotenv");
const twilio = require("twilio");
const argv = process.argv.slice(2);
dotenv.config()

const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_TOKEN = process.env.TWILIO_TOKEN;
const client = twilio(TWILIO_SID, TWILIO_TOKEN);

const TWILIO_PHONE = process.env.TWILIO_PHONE;

const PHONE_NUMBER = argv[0];
if (!PHONE_NUMBER) {
  console.log("Numero de telefono de destino requerido para enviar mensaje")
  process.exit(1);
}
const body = argv[1] || "Hola";

async function sendMessage() {
  try {
    const message = await client.messages.create({
      body,
      from: TWILIO_PHONE,
      to: PHONE_NUMBER,
    });
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

sendMessage()
.then( () => process.exit(0))
.catch(console.log);