import { IS_EMPTY_CHANGE, ON_FOCUS_CHANGE, REVERSE_HIDE_PASS, UPDATE_MAIL, UPDATE_PASS } from "./actions";


const initialState={
    mail:"",
    password: "",
    isEmpty: true,
    onFocus: false,
    hidePass: true,
}

 function LoginReducer(state=initialState, action){
     switch(action.type){
         case IS_EMPTY_CHANGE:
             return {...state, isEmpty: action.actionValue}
        case UPDATE_MAIL:
            return {...state, mail: action.actionValue}
        case UPDATE_PASS:
            return {...state, password: action.actionValue}
        case REVERSE_HIDE_PASS:
            return {...state, hidePass: action.actionValue}
        case ON_FOCUS_CHANGE:
            return {...state, onFocus: action.actionValue}
        default:
            return state;
             
     }
 }

 export default LoginReducer;