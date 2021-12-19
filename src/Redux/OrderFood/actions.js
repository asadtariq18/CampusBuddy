export const BASKET = "BASKET";
export const TOTAL = "TOTAL";
export const PENDING_ORDERS_LIST = "PENDING_ORDERS_LIST";

export const setBasket = (value) => {
  return { actionValue: value, type: BASKET };
};
export const setTotal = (value) => {
  return { actionValue: value, type: TOTAL };
};
export const setPendingOrdersList = (value) => {
  return { actionValue: value, type: PENDING_ORDERS_LIST };
};
