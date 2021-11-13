import { QUERY } from "./actions";

const initialState = {
  query: "",
};

function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case QUERY:
      return { ...state, query: action.actionValue };
    default:
      return state;
  }
}

export default SearchReducer;
