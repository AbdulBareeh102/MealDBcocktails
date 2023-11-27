import logo from "../assets/logo-small.png";
import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <img src={logo} className="nav-logo" alt="backroads" />
        <div className="nav-links">
          <NavLink to="/" className="nav-link homepage-link active">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
