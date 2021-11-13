export const LIGHT = "LIGHT";
export const DARK = "DARK";

export const setLightTheme = (value) => {
  return { actionValue: value, type: LIGHT };
};

export const setDarkTheme = (value) => {
  return { actionValue: value, type: DARK };
};
