import { combineReducers } from "redux";
import authReducer from './authReducer/authReducer'
import profileReducer from "./profile";
import mydonationReducer from './mydonationReducer/mydonationReducer'
import mycampaignReducer from './mycampaignReducer/mycampaignReducer'

const rootReducer = combineReducers({ auth: authReducer, profileReducer, mydonationReducer,campaign: mycampaignReducer });


export default rootReducer;
