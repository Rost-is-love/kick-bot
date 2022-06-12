import { Composer, Scenes } from "telegraf";

const startStep = new Composer();

startStep.on("text", async (ctx) => {
  try {
    await ctx.replyWithHTML("Stats will be here");

    return ctx.wizard.next();
  } catch (error) {
    console.error(error);
  }

  return undefined;
});

export const statsScene = new Scenes.WizardScene("statsWizard", startStep);
