import { combineReducers } from "redux";
<<<<<<< HEAD
import authReducer from './authReducer/authReducer'
=======
import authReducer from "./authReducer";
import profileReducer from "./profile";
>>>>>>> dde15c479003f59c5387d26fed97c4992f9c226f

const rootReducer = combineReducers({ auth: authReducer, profileReducer });

export default rootReducer;
