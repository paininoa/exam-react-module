import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import LangContext from "./LangContext";

export default ({ selectLang }) => {
  const lang = useContext(LangContext);

  const trad = {
    "en-US": { home: "Home", about: "About", search: "Search" },
    "it-IT": { home: "Casa :)", about: "Chi siamo", search: "Cerca" },
  };

  return (
    <nav className="navbar">
      <menu>
        <NavLink to="/" className="navlink">
          {trad[lang].home}
        </NavLink>
        <NavLink to="/about" className="navlink">
          {trad[lang].about}
        </NavLink>
        <NavLink to="/search" className="navlink">
          {trad[lang].search}
        </NavLink>
        <select onChange={(e) => selectLang(e.target.value)}>
          <option value="en-US">ENG</option>
          <option value="it-IT">ITA</option>
        </select>
      </menu>
    </nav>
  );
};
