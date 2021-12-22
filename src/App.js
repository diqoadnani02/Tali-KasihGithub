import Header from "./Components/Header/Header";
import Routers from "./Routes/Routes";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { useState } from "react";
import SearchDiscover from "./Pages/Discover/SearchDiscover";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <>
      <Provider store={store}>
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      {inputSearch === "" ? <Routers inputSearch={inputSearch} /> : <SearchDiscover inputSearch={inputSearch} />}
      <Footer />
      </Provider>
    </>
  );
}

export default App;
