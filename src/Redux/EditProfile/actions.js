export const IS_DONE = "IS_DONE";
export const IMAGE = "IMAGE";
export const INFO = "INFO";

export const setIsDone = (value) => {
  return { actionValue: value, type: IS_DONE };
};

export const setImage = (value) => {
  return { actionValue: value, type: IMAGE };
};

export const setInfo = (value) => {
  return { actionValue: value, type: INFO };
};
