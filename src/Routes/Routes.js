import { Routes, Route } from "react-router-dom";
import Campaign from "../Pages/Campaign/Campaign";

export default function Routers() {
  return (
    <>
      <Routes>
        <Route exact path="/campaign" element={<Campaign/>} />
      </Routes>
    </>
  );
}
