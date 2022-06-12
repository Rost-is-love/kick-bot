import "dotenv/config";
import { Markup, Scenes, session } from "telegraf";
import { bot } from "./bot.js";
import { setTimer } from "./modules/timer.js";
import { progressScene } from "./scenes/progress.js";
import { statsScene } from "./scenes/stats.js";

const stage = new Scenes.Stage([progressScene, statsScene]);
bot.use(session());
bot.use(stage.middleware());

bot.hears("Progress", (ctx) => ctx.scene.enter("progressWizard"));
bot.hears("Stats", (ctx) => ctx.scene.enter("statsWizard"));

bot.start(async (ctx) => {
  try {
    await ctx.reply(
      "Welcome",
      Markup.keyboard([["Progress", "Stats"]])
        .oneTime()
        .resize(),
    );
    setTimer("primary");
  } catch (error) {
    console.error(error);
  }
});

bot.launch();
