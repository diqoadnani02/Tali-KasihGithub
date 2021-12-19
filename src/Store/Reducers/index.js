import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import profileReducer from "./profile";
import mydonationReducer from './mydonationReducer/mydonationReducer'
import mycampaignReducer from './mycampaignReducer/mycampaignReducer'
import donationReducer from './donationReducer/donationReducer'
import discoverReducer from "./discoverReducer/discoverReducer";

const rootReducer = combineReducers({ auth: authReducer, profileReducer, mydonationReducer, campaign: mycampaignReducer, cardHomeReducer, discoverReducer,donate: donationReducer });

export default rootReducer;
