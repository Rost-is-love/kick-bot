import "dotenv/config";
import { Telegraf, Markup, Scenes, session } from "telegraf";
import { progressScene } from "./scenes/progress.js";
import { statsScene } from "./scenes/stats.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Scenes.Stage([progressScene, statsScene]);
bot.use(session());
bot.use(stage.middleware());

bot.hears("Progress", (ctx) => ctx.scene.enter("progressScene"));
bot.hears("Stats", (ctx) => ctx.scene.enter("statsScene"));

bot.telegram.sendMessage(
  process.env.MY_CHAT_ID,
  "Did you learn words in Anki today?",
  Markup.inlineKeyboard([
    [Markup.button.callback("Yes", "yes"), Markup.button.callback("No", "no")],
  ]),
);

bot.start(async (ctx) => {
  try {
    await ctx.reply(
      "Welcome",
      Markup.keyboard([["Progress", "Stats"]])
        .oneTime()
        .resize(),
    );
  } catch (error) {
    console.error(error);
  }
});

bot.launch();
