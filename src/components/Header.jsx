import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container flex items-center">
        <img className="w-16 m-2" src={LOGO_URL} alt="Image not found" />
        <h1 className="text-xl font-extrabold">
          <Link to="/">Zwiggy</Link>
        </h1>
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
          <li className="px-4 text-lg font-semibold">
            <span>{loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
