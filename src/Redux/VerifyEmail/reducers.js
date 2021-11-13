import { LABEL, MAIL_SENT } from "./actions";

const initialState = {
  mailSent: false,
  label: "Verify your email address to get registered",
};

function VerifyEmailReducer(state = initialState, action) {
  switch (action.type) {
    case MAIL_SENT:
      return { ...state, mailSent: action.actionValue };
    case LABEL:
      return { ...state, label: action.actionValue };
    default:
      return state;
  }
}

export default VerifyEmailReducer;
