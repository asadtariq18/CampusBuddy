import { MY_STORY } from "./actions";

const initialState = {
  myStory: null,
};

function StoryReducer(state = initialState, action) {
  switch (action.type) {
    case MY_STORY:
      return { ...state, myStory: action.actionValue };
    default:
      return state;
  }
}

export default StoryReducer;
