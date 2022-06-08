import "dotenv/config";
import { DateTime } from "luxon";
import { Markup } from "telegraf";

export const setTimer = (bot, timerType) => {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const now = DateTime.now().setZone(timezone);

  if (timerType === "primary") {
    const tomorrow = now.plus({ days: 1 });
    const targetDate = DateTime.fromObject(
      {
        year: tomorrow.toObject().year,
        month: tomorrow.toObject().month,
        day: tomorrow.toObject().day,
        hour: 20,
        minute: 0,
      },
      { zone: timezone },
    );

    const diff = targetDate.diff(now, "seconds").toObject().seconds * 1000 || 0;

    setTimeout(() => {
      bot.telegram.sendMessage(
        process.env.MY_CHAT_ID,
        "Did you spend time on your project today?",
        Markup.inlineKeyboard([
          [Markup.button.callback("Yes", "yes"), Markup.button.callback("No", "no")],
        ]),
      );
    }, diff);
  }
};
