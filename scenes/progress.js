import { Composer, Scenes } from "telegraf";

const startStep = new Composer();
export const progressScene = new Scenes.WizardScene("progressScene", startStep);
