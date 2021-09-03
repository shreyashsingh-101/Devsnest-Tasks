import userReducer from "./userReducer"; 
import passReducer from "./passReducer"; 


import { combineReducers } from 'redux';

const rootReducer = combineReducers({user: userReducer,pass: passReducer});

export default rootReducer;