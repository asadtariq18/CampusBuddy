import { IS_EMPTY, MAIL, ON_FOCUS } from "./actions";

const initialState = {
  mail: "",
  isEmpty: true,
  onFocus: false,
};

function ForgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case MAIL:
      return { ...state, mail: action.actionValue };
    case IS_EMPTY:
      return { ...state, isEmpty: action.actionValue };
    case ON_FOCUS:
      return { ...state, onFocus: action.actionValue };
    default:
      return state;
  }
}

export default ForgotPasswordReducer;
