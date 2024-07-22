import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      logo
      <img className="logo" src="" />
    </div>
    <div className="Nav-item">
      <ul style={{ display: "flex", justifyContent: "space-between" }}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
export default Header;
