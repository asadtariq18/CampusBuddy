export const FIRST_NAME = "FIRST_NAME";
export const LAST_NAME = "LAST_NAME";
export const IS_FEMALE = "IS_FEMALE";
export const IS_MALE = "IS_MALE";
export const GENDER = "GENDER";
export const MAIL = "MAIL";
export const PASSWORD = "PASSWORD";
export const IS_VALID_FIRST_NAME = "IS_VALID_FIRST_NAME";
export const IS_VALID_LAST_NAME = "IS_VALID_LAST_NAME";
export const IS_VALID_MAIL = "IS_VALID_MAIL";
export const IS_VALID_PASSWORD = "IS_VALID_PASSWORD";
export const ON_FOCUS = "ON_FOCUS";


export const setFirstName = (value) => {
  return { actionValue: value, type: FIRST_NAME };
};

export const setLastName = (value) => {
  return { actionValue: value, type: LAST_NAME };
};

export const setMail = (value) => {
  return { actionValue: value, type: MAIL };
};

export const setPassword = (value) => {
  return { actionValue: value, type: PASSWORD };
};

export const setIsMale = (value) => {
  return { actionValue: value, type: IS_MALE };
};

export const setIsFemale = (value) => {
  return { actionValue: value, type: IS_FEMALE };
};

export const setGender = (value) => {
  return { actionValue: value, type: GENDER };
};

export const setIsValidFirstName = (value) => {
  return { actionValue: value, type: IS_VALID_FIRST_NAME };
};

export const setIsValidLastName = (value) => {
  return { actionValue: value, type: IS_VALID_LAST_NAME };
};

export const setIsValidMail = (value) => {
  return { actionValue: value, type: IS_VALID_MAIL };
};

export const setIsValidPassword = (value) => {
  return { actionValue: value, type: IS_VALID_PASSWORD };
};

export const setOnFocus = (value) => {
  return { actionValue: value, type: ON_FOCUS };
};


