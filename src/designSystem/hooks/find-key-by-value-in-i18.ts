import i18n, { resources } from "../../i18n";

export const findKeyByValue = (value: any): any => {
  const translationObject: any = resources[i18n.language].translation;
  return Object.keys(translationObject).find(
    (key) => translationObject[key] === value
  );
};
