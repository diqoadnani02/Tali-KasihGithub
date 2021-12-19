import { Routes, Route } from "react-router-dom";
import Campaign from "../Pages/Campaign/Campaign";
import CampaignCreation from "../Pages/CampaignCreate/CampaignCreation";
import Home from "../Pages/Home";
import Discover from "../Pages/Discover/Discover";
import DiscoverCategory from "../Pages/Discover/DiscoverCategory";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/Profile/EditProfile";
import Payment from "../Pages/Payment/Payment";
import Fundraiser from "../Pages/Fundraiser/Fundraiser";

export default function Routers({ inputSearch }) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/campaign" element={<Campaign />} />
        <Route exact path="/fundraiser" element={<Fundraiser />} />
        <Route path="/campaign/donate" element={<Payment />} />
        <Route exact path="/create" element={<CampaignCreation />} />
        <Route path="/discover" element={<Discover inputSearch={inputSearch} />} />
        <Route path="/discover/category/:categoryId/:sort" element={<DiscoverCategory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </>
  );
}
