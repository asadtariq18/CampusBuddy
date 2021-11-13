import { POSTS, REFRESHING, USER } from "./actions";
import Database from "../../Database/database";

const initialState = {
  refreshing: false,
  user: null,
  posts: null,
};

function ProfileReducer(state = initialState, action) {
  switch (action.type) {
    case REFRESHING:
      return { ...state, refreshing: action.actionValue };
    case USER:
      return { ...state, user: action.actionValue };
    case POSTS:
      return { ...state, posts: action.actionValue };
    default:
      return state;
  }
}

export default ProfileReducer;
