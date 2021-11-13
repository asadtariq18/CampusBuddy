import {
  FIRST_NAME,
  GENDER,
  IS_FEMALE,
  IS_MALE,
  IS_VALID_FIRST_NAME,
  IS_VALID_LAST_NAME,
  IS_VALID_MAIL,
  IS_VALID_PASSWORD,
  LAST_NAME,
  MAIL,
  ON_FOCUS,
  PASSWORD,
} from "./actions";

const initialState = {
  firstName: "",
  lastName: "",
  isFemale: false,
  isMale: false,
  gender: "",
  mail: "",
  password: "",
  isValidFirstName: false,
  isValidLastName: false,
  isValidMail: false,
  isValidPassword: false,
  onFocus: false,
};

function SignUpReducer(state = initialState, action) {
  switch (action.type) {
    case FIRST_NAME:
      return { ...state, firstName: action.actionValue };
    case LAST_NAME:
      return { ...state, lastName: action.actionValue };
    case IS_FEMALE:
      return { ...state, isFemale: action.actionValue };
    case IS_MALE:
      return { ...state, isMale: action.actionValue };
    case GENDER:
      return { ...state, gender: action.actionValue };
    case MAIL:
      return { ...state, mail: action.actionValue };
    case PASSWORD:
      return { ...state, password: action.actionValue };
    case IS_VALID_FIRST_NAME:
      return { ...state, isValidFirstName: action.actionValue };
    case IS_VALID_LAST_NAME:
      return { ...state, isValidLastName: action.actionValue };
    case IS_VALID_MAIL:
      return { ...state, isValidMail: action.actionValue };
    case IS_VALID_PASSWORD:
      return { ...state, isValidPassword: action.actionValue };
    case ON_FOCUS:
      return { ...state, onFocus: action.actionValue };
    default:
      return state;
  }
}

export default SignUpReducer;
