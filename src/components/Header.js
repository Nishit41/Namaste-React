import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();
 return <div className="header">
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
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>Cart</li>
        <li>{isOnline? "LogOut": "LogIn"}</li>
      </ul>
    </div>
  </div>
};
export default Header;
