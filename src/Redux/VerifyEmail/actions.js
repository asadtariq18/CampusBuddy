export const MAIL_SENT = "MAIL_SENT";
export const LABEL = "LABEL";

export const setMailSent = (value) => {
  return { actionValue: value, type: MAIL_SENT };
};

export const setLabel = (value) => {
  return { actionValue: value, type: LABEL };
};
