import { DARK, LIGHT } from "./actions";

const initialState = {
  light: false,
  dark: true,
};

function ThemeReducer(state = initialState, action) {
  switch (action.type) {
    case LIGHT:
      return { ...state, light: action.actionValue };
    case DARK:
      return { ...state, dark: action.actionValue };
    default:
      return state;
  }
}

export default ThemeReducer;
