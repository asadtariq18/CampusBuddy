import { LOAD } from "./actions";

const initialState = {
  load: false,
};

function LoadDBReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return { ...state, load: action.actionValue };
    default:
      return state;
  }
}

export default LoadDBReducer;
