import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";

const Header = () => {
  const isOnline = useOnlineStatus();
 return <div className="flex justify-between px-8 py-4  bg-pink-200 shadow-md text-white">
    <div className="logo-container">
      logo
      <img className="logo" src="" />
    </div>
      <ul className="flex gap-2">
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
};
export default Header;
