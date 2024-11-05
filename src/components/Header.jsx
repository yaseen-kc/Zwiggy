import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  // const [isLoggedIn, SetIsLoggedIn] = useState(false);

  // let isOnline = useOnline;
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} alt="Image not found" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-lg font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 text-lg font-semibold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-lg font-semibold">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-4 text-lg font-semibold">Cart</li>
          <button
            className="px-4 text-lg font-semibold"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
