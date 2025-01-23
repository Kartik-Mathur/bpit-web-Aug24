import { combineReducers } from "redux";
import counterReducer from "./counter/counter.reducer";

const rootReducer = combineReducers({ counterReducer });
export default rootReducer;
