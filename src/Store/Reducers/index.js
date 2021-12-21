import { combineReducers } from "redux";
import authReducer from "./authReducer/authReducer";
import profileReducer from "./profile";
import mydonationReducer from "./mydonationReducer/mydonationReducer";
import mycampaignReducer from "./mycampaignReducer/mycampaignReducer";
import commentReducer from "./Campaign/comment";
import campaignReducer from "./Campaign/campaign";
import donationReducer from './donationReducer/donationReducer'
import discoverReducer from "./discoverReducer/discoverReducer";
import cardHomeReducer from './cardHomeReducer/cardHomeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profileReducer,
  mydonationReducer,
  campaign: mycampaignReducer,
  commentReducer,
  campaignReducer,
  cardHomeReducer,
  discoverReducer,
  donate: donationReducer 
});


export default rootReducer;
