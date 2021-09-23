import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import placeReducer from "./placeReducer";

const rootReducer= combineReducers({
place:placeReducer,
data:dataReducer, 
});
export default rootReducer;