import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import profileReducer from "./profile";
import mydonationReducer from "./mydonationReducer/mydonationReducer";
import mycampaignReducer from "./mycampaignReducer/mycampaignReducer";
import donationReducer from "./donationReducer/donationReducer";
import discoverReducer from "./discoverReducer/discoverReducer";
import cardHomeReducer from "./cardHomeReducer/cardHomeReducer";
import discoverRelatedReducer from "./discoverReducer/discoverRelatedReducer";

const rootReducer = combineReducers({ auth: authReducer, profileReducer, mydonationReducer, campaign: mycampaignReducer, cardHomeReducer, discoverReducer, discoverRelatedReducer, donate: donationReducer });

export default rootReducer;
