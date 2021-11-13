import { IMAGE, INFO, IS_DONE } from "./actions";
import Database from "../../Database/database";
const initialState = {
  isDone: false,
  image: null,
  info: "",
};

function EditProfileReducer(state = initialState, action) {
  switch (action.type) {
    case IS_DONE:
      return { ...state, isDone: action.actionValue };
    case IMAGE:
      return { ...state, image: action.actionValue };
    case INFO:
      return { ...state, info: action.actionValue };
    default:
      return state;
  }
}

export default EditProfileReducer;
