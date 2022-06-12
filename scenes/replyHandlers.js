// eslint-disable-next-line import/no-cycle
import { setTimer } from "../modules/timer.js";

export const handleYesPrimary = () => {
  // TODO: add database
  console.log("put date to db");
};

export const handleNoPrimary = () => {
  // TODO: add database
  setTimer("secondary");
};

export const handleYesSecondary = () => {
  // TODO: add database
};

export const handleNoSecondary = () => {
  // TODO: add database
};
