import { combineReducers } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profile";

const rootReducer = combineReducers({ auth: authReducer, profileReducer });

export default rootReducer;
