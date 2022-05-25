import { Composer, Scenes } from "telegraf";

const startStep = new Composer();

export const statsScene = new Scenes.WizardScene("statsScene", startStep);
