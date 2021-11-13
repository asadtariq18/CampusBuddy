import { AUDIO, IMAGE, MESSAGES, ON_FOCUS, USER } from "./actions";

const initialState = {
  user: null,
  messages: null,
  image: null,
  audio: null,
  onFocus: false,
};

function InboxReducer(state = initialState, action) {
  switch (action.type) {
    case USER:
      return { ...state, user: action.actionValue };
    case MESSAGES:
      return { ...state, messages: action.actionValue };
    case IMAGE:
      return { ...state, image: action.actionValue };
    case AUDIO:
      return { ...state, audio: action.actionValue };
    case ON_FOCUS:
      return { ...state, onFocus: action.actionValue };
    default:
      return state;
  }
}

export default InboxReducer;
