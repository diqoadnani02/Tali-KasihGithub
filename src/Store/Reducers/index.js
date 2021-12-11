import { combineReducers } from "redux";
<<<<<<< HEAD
import authReducer from './authReducer/authReducer'
<<<<<<< HEAD
import profileReducer from "./profile";


const rootReducer = combineReducers({ auth: authReducer, profileReducer });

=======
=======
import authReducer from "./authReducer";
import profileReducer from "./profile";
>>>>>>> dde15c479003f59c5387d26fed97c4992f9c226f

const rootReducer = combineReducers({ auth: authReducer, profileReducer });

>>>>>>> 8b2fe7eb3bf936cd93a97f61494db8209d712d81
export default rootReducer;
