export const BASKET = "BASKET";
export const TOTAL = "TOTAL";

export const setBasket = (value) => {
  return { actionValue: value, type: BASKET };
};
export const setTotal = (value) => {
  return { actionValue: value, type: TOTAL };
};
