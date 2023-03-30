const dotenv = require("dotenv");
const twilio = require("twilio");
dotenv.config()

const PHONE_NUMBER = process.env.PHONE_NUMBER;
const TWILIO_SID = process.env.TWILIO_SID;
const TWILIO_TOKEN = process.env.TWILIO_TOKEN;
const TWILIO_PHONE = process.env.TWILIO_PHONE;

const client = twilio(TWILIO_SID, TWILIO_TOKEN);

async function sendMessage() {
  try {
    const message = await client.messages.create({
      body: 'Hola desde NodeJS con Twilio',
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
// .catch(err => console.log(err));