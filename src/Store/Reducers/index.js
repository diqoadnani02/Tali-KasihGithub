import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import profileReducer from "./profile";
import mydonationReducer from "./mydonationReducer/mydonationReducer";
import mycampaignReducer from "./mycampaignReducer/mycampaignReducer";
import cardHomeReducer from "./cardHomeReducer/cardHomeReducer";
import discoverReducer from "./discoverReducer/discoverReducer";

const rootReducer = combineReducers({ auth: authReducer, profileReducer, mydonationReducer, campaign: mycampaignReducer, cardHomeReducer, discoverReducer });

export default rootReducer;
