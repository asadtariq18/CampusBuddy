import { POSTS, REFRESHING, USER, REQUESTSENT, REQUESTRECEIVED } from "./actions";

const initialState = {
  refreshing: false,
  requestSent: false,
  requestReceived: false,
  user: null,
  posts: null,
};

function UserProfileReducer(state = initialState, action) {
  switch (action.type) {
    case REFRESHING:
      return { ...state, refreshing: action.actionValue };
    case REQUESTSENT:
      return { ...state, requestSent: action.actionValue };
    case REQUESTRECEIVED:
      return { ...state, requestReceived: action.actionValue };
    case USER:
      return { ...state, user: action.actionValue };
    case POSTS:
      return { ...state, posts: action.actionValue };
    default:
      return state;
  }
}

export default UserProfileReducer;
