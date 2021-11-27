import { BASKET, TOTAL } from "./actions";

const initialState = {
  basket: [],
  total: 0,
};

function OrderFoodReducer(state = initialState, action) {
  switch (action.type) {
    case BASKET:
      return { ...state, basket: action.actionValue };
    case TOTAL:
      return { ...state, total: action.actionValue };
    default:
      return state;
  }
}

export default OrderFoodReducer;
