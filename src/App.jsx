import { useState } from "react";
import "./App.scss";
import About from "./Components/About";
const apiKey = import.meta.env.VITE_API_KEY;

function App() {
  return (
    <>
      <h1>React module exam</h1>
      <About />
    </>
  );
}

export default App;
