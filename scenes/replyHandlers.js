// eslint-disable-next-line import/no-cycle
import { setTimer } from "../modules/timer.js";

export const handleYesPrimary = () => {
  // TODO: add database
  setTimer("primary");
};

export const handleNoPrimary = () => {
  // TODO: add database
  setTimer("secondary");
};

export const handleYesSecondary = () => {
  // TODO: add database
  setTimer("primary");
};

export const handleNoSecondary = () => {
  // TODO: add database
  setTimer("primary");
};
