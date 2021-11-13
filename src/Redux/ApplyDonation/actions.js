export const NAME = "NAME";
export const REG_NO = "REG_NO";
export const REASON = "REASON";

export const setName = (value) => {
  return { actionValue: value, type: NAME };
};

export const setRegNo = (value) => {
  return { actionValue: value, type: REG_NO };
};

export const setReason = (value) => {
  return { actionValue: value, type: REASON };
};
