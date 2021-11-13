import { CAPTION, IMAGE, PRIVACY, TYPE } from "./actions";

const initialState = {
  caption: "",
  type: "status",
  privacy: "public",
  image: "https://icon-library.com/images/add-photo-icon/add-photo-icon-19.jpg",
};

function CreatePostReducer(state = initialState, action) {
  switch (action.type) {
    case CAPTION:
      return { ...state, caption: action.actionValue };
    case TYPE:
      return { ...state, type: action.actionValue };
    case PRIVACY:
      return { ...state, privacy: action.actionValue };
    case IMAGE:
      return { ...state, image: action.actionValue };
    default:
      return state;
  }
}

export default CreatePostReducer;
