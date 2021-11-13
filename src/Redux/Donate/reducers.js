import { AMOUNT, CARD_DETAILS } from "./actions";

const initialState = {
  cardDetails: {},
  amount: 0,
};

function DonateReducer(state = initialState, action) {
  switch (action.type) {
    case CARD_DETAILS:
      return { ...state, cardDetails: action.actionValue };
    case AMOUNT:
      return { ...state, amount: action.actionValue };
    default:
      return state;
  }
}

export default DonateReducer;
