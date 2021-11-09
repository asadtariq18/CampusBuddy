import { combineReducers } from 'redux';
import LoginReducer from './SignIn/reducers';

export const rootReducer = combineReducers({login :LoginReducer})