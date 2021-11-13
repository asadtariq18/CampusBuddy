export const CARD_DETAILS = "CARD_DETAILS";
export const AMOUNT = "AMOUNT";

export const setCardDetails = (value) => {
  return { actionValue: value, type: CARD_DETAILS };
};

export const setAmount = (value) => {
  return { actionValue: value, type: AMOUNT };
};
