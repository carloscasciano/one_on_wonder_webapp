export function getUserBrowserLanguage() {
  let OOWArray = [];
  let userBrowserLanguage = navigator.language;
  OOWArray = userBrowserLanguage.includes("pt")
    ? OOWArray.concat("ptbr")
    : OOWArray.concat("enus");
  return OOWArray;
}
