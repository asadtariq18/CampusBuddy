export const USER = "USER";
export const MESSAGES = "MESSAGES";
export const IMAGE = "IMAGE";
export const AUDIO = "AUDIO";
export const ON_FOCUS = "ON_FOCUS";

export const setUser = (value) => {
  return { actionValue: value, type: USER };
};

export const setMessages = (value) => {
  return { actionValue: value, type: MESSAGES };
};

export const setImage = (value) => {
  return { actionValue: value, type: IMAGE };
};

export const setAudio = (value) => {
  return { actionValue: value, type: AUDIO };
};

export const setOnFocus = (value) => {
  return { actionValue: value, type: ON_FOCUS };
};
