import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import profileReducer from "./profile";

const rootReducer = combineReducers({ auth: authReducer, profileReducer });

export default rootReducer;
