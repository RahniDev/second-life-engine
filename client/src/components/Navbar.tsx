import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/my-inventory">
        My Inventory
      </NavLink>

      <NavLink to="/add-item">
        Add an Object
      </NavLink>

      <NavLink to="/projects">
        Projects
      </NavLink>
    </nav>
  );
}

export default Navbar;