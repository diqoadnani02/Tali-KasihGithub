import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Discover from "../Pages/Discover/Discover";
import DiscoverCategory from "../Pages/Discover/DiscoverCategory";
export default function Routers() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/category" element={<DiscoverCategory />} />
      </Routes>
    </>
  );
}
