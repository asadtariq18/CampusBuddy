import { BASKET, TOTAL , PENDING_ORDERS_LIST} from "./actions";

const initialState = {
  basket: [],
  pendingOrdersList: [],
  total: 0,
};

function OrderFoodReducer(state = initialState, action) {
  switch (action.type) {
    case BASKET:
      return { ...state, basket: action.actionValue };
    case TOTAL:
      return { ...state, total: action.actionValue };
          case PENDING_ORDERS_LIST:
      return { ...state, pendingOrdersList: action.actionValue };
    default:
      return state;
  }
}

export default OrderFoodReducer;
