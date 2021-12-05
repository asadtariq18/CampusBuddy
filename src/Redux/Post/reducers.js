import { POST, COMMENTS, REFRESHING, COMMENTS_ARRAY } from "./actions";

const initialState = {
  post: null,
  comments: null,
  commentsArray: [],
  refreshing: false
};

function PostReducer(state = initialState, action) {
  switch (action.type) {
    case POST:
      return { ...state, post: action.actionValue };
    case COMMENTS:
      return { ...state, comments: action.actionValue };
    case COMMENTS_ARRAY:
      return { ...state, commentsArray: action.actionValue };
    case REFRESHING:
      return { ...state, refreshing: action.actionValue };
    default:
      return state;
  }
}

export default PostReducer;
