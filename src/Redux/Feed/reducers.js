import { POSTS_ARRAY} from "./actions";

const initialState = {
  postsArray: [],
};

function FeedReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_ARRAY:
      return { ...state, postsArray: action.actionValue };
    default:
      return state;
  }
}

export default FeedReducer;
