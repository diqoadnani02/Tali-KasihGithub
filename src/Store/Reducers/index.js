import { combineReducers } from "redux";
import authReducer from './authReducer/authReducer'
import profileReducer from "./profile";
import mydonationReducer from './mydonationReducer/mydonationReducer'

const rootReducer = combineReducers({ auth: authReducer, profileReducer, mydonationReducer });


export default rootReducer;
