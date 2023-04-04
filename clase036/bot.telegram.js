import * as dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';

dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id; // Obtiene el ID del chat
  const message = 'Hola Mundo! Desde NodeJS - TelegramBot'; // Mensaje a enviar 
  bot.sendMessage(chatId, message); // Envía el mensaje al chat (chatId)
});