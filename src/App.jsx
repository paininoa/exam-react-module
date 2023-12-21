import { useState } from "react";
import "./App.scss";
import About from "./Components/About";
import HomePage from "./Components/HomePage";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  return (
    <>
      <HomePage />
      <About />
    </>
  );
}

export default App;
