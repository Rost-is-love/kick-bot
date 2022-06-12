import { Telegraf } from "telegraf";
// eslint-disable-next-line import/no-cycle
import {
  handleYesPrimary,
  handleNoPrimary,
  handleYesSecondary,
  handleNoSecondary,
} from "./scenes/replyHandlers.js";

export const bot = new Telegraf(process.env.BOT_TOKEN);

bot.action((text, ctx) => {
  switch (text) {
    case "yes-primary":
      handleYesPrimary();
      ctx.replyWithHTML("Very well done! Keep it going");
      break;
    case "no-primary":
      handleNoPrimary();
      ctx.replyWithHTML("Do it right now. I'll ask again soon!");
      break;
    case "yes-secondary":
      handleYesSecondary();
      ctx.replyWithHTML("Great! Thank you :)");
      break;
    case "no-secondary":
      handleNoSecondary();
      ctx.replyWithHTML("Sad news :( Please, don't forget about your project tomorrow!");
      break;
    default:
      return undefined;
  }
});
