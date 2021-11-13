import { NAME, REASON, REG_NO } from "./actions";

const initialState = {
  name: "",
  regNo: "",
  reason: "",
};

function ApplyDonationReducer(state = initialState, action) {
  switch (action.type) {
    case NAME:
      return { ...state, name: action.actionValue };
    case REG_NO:
      return { ...state, regNo: action.actionValue };
    case REASON:
      return { ...state, reason: action.actionValue };
    default:
      return state;
  }
}

export default ApplyDonationReducer;
