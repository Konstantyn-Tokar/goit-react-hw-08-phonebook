export const toUpperCaseFirstLetter = (value) => {
  const arrFromStr = value.split("");
  arrFromStr[0] = arrFromStr[0].toUpperCase();
  return arrFromStr.join("");
};
