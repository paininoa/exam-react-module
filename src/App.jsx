import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import SearchPage from "./Components/SearchPage";
import Navbar from "./Components/Navbar";
import PersonPage from "./Components/PersonPage";
import LangContext from "./Components/LangContext";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en-US");

  return (
    <>
      <LangContext.Provider value={lang}>
        <Navbar selectLang={setLang} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="person">
            <Route index element={<PersonPage />} />
            <Route path=":id" element={<PersonPage />} />
          </Route>
        </Routes>
      </LangContext.Provider>
    </>
  );
}

export default App;
