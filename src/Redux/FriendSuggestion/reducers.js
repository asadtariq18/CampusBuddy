import { SUGGESTION_LIST } from "./actions";

const initialState = {
  suggestionList: [],
};

function FriendSuggestionReducer(state = initialState, action) {
  switch (action.type) {
    case SUGGESTION_LIST:
      return { ...state, suggestionList: action.actionValue };
    default:
      return state;
  }
}

export default FriendSuggestionReducer;
