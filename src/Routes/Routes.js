import { Routes, Route } from "react-router-dom";
import Campaign from "../Pages/Campaign/Campaign";
import CampaignCreation from "../Pages/CampaignCreate/CampaignCreation";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route exact path="/campaign" element={<Campaign/>} />
        <Route exact path="/create" element={<CampaignCreation/>} />
      </Routes>
    </>
  );
}
