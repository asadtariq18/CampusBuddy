import { POSTS } from "./actions";

const initialState = {
  posts: null,
};

function TimelineReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS:
      return { ...state, posts: action.actionValue };
    default:
      return state;
  }
}

export default TimelineReducer;
