import * as ENUS from "../textData/enus/texts";
import * as PTBR from "../textData/ptbr/texts";
import { getUserBrowserLanguage } from "./getUserBrowserLanguage";

const userLanguage = getUserBrowserLanguage();

export function getUserLanguagePack() {
  return userLanguage[0] === "enus" ? ENUS : PTBR;
}
