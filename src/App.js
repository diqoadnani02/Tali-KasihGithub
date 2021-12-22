import Header from "./Components/Header/Header";
import Routers from "./Routes/Routes";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { useState } from "react";
import SearchDiscover from "./Pages/Discover/SearchDiscover";
function App() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      {inputSearch === "" ? <Routers inputSearch={inputSearch} /> : <SearchDiscover inputSearch={inputSearch} />}
      <Footer />
    </>
  );
}

export default App;
