import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
import SearchPage from "./Components/SearchPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <SearchPage /> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
