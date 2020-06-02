import * as ENUS from "../textData/enus/texts";
import * as PTBR from "../textData/ptbr/texts";

let languageCode = "ptbr";

export let textData =
  languageCode === "enus" ? ENUS : languageCode === "ptbr" ? PTBR : null;



export function getLanguageTexts(lang) {
    let textData = lang === "enus" ? ENUS : lang === "ptbr" ? PTBR : null;
    return textData
}