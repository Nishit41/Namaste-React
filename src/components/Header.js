import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useContext } from "react";
import { userContext } from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store?.cart?.items);
  return (
    <div className="flex justify-between px-8 py-4  bg-pink-200 shadow-md text-white">
      <div className="logo-container">
        logo
        {/* <img className="logo" src="" /> 
        TODO: will implement this later
        */}
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
        <li>
          <Link to="/cart">Cart {cartItems.length}</Link>
        </li>
        <li>
          {isOnline ? "LogIn" : "LogOut"} {loggedInUser}
        </li>
      </ul>
    </div>
  );
};
export default Header;
