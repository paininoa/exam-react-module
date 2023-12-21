import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav className="navbar">
      <menu>
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <NavLink to="/about" className="navlink">
          About
        </NavLink>
        <NavLink to="/search" className="navlink">
          Search
        </NavLink>
      </menu>
    </nav>
  );
};
