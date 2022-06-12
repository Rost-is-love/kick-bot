import { Composer, Scenes } from "telegraf";

const startStep = new Composer();
startStep.on("text", async (ctx) => {
  try {
    await ctx.replyWithHTML("Info about your progress will be here");

    return ctx.wizard.next();
  } catch (error) {
    console.error(error);
  }

  return undefined;
});

export const progressScene = new Scenes.WizardScene("progressWizard", startStep);
