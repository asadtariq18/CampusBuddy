export const CAPTION = "CAPTION";
export const TYPE = "TYPE";
export const PRIVACY = "PRIVACY";
export const IMAGE = "IMAGE";

export const setCaption = (value) => {
  return { actionValue: value, type: CAPTION };
};

export const setType = (value) => {
  return { actionValue: value, type: TYPE };
};

export const setPrivacy = (value) => {
  return { actionValue: value, type: PRIVACY };
};

export const setImage = (value) => {
  return { actionValue: value, type: IMAGE };
};
