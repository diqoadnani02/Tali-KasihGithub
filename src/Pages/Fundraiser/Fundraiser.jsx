import TopFundraiser from "./TopFundraiser/TopFundraiser";
import ReadMore from "../Campaign/ReadMore/ReadMore";
import CampaignUpdate from "../Campaign/CampaignUpdate/CampaignUpdate";
import Donation from "../Campaign/Donation/Donation";
import Comment from "../Campaign/Comment/Comment";

export default function Fundraiser() {
  return (
    <div>
      <TopFundraiser />
      <ReadMore />
      <CampaignUpdate />
      <Donation />
      <Comment />
    </div>
  );
}
