import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'

export default function Routers() {
  return (
      <>
      <Routes>
          <Route exact path='/' element={<Home />} />
      </Routes>
      </>
  )
