export const MAIL = "MAIL";
export const IS_EMPTY = "IS_EMPTY";
export const ON_FOCUS = "ON_FOCUS";

export const setMail = (value) => {
  return { actionValue: value, type: MAIL };
};

export const setIsEmpty = (value) => {
  return { actionValue: value, type: IS_EMPTY };
};

export const setOnFocus = (value) => {
  return { actionValue: value, type: ON_FOCUS };
};
