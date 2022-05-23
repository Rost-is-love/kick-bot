import "dotenv/config";
import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Hello");
  console.log(msg);
});
