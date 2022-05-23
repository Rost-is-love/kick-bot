import "dotenv/config";
import { Telegraf, Markup } from "telegraf";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply("Welcome", Markup.keyboard([["Look at progress"]]));
});

bot.launch();
