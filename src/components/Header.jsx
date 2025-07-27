import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "../../node_modules/react";
import { CDN_LOGO_URL } from "../utils/constants";
import logo from "./logo.png";

function Header() {
  const [login, setLogin] = useState(false);
  console.log(logo);
  return (
    <div
      className="
      z-100
      w-full fixed bg-yellow-500 text-[10px] sm:text-xl
      flex items-center justify-between 
      mb-2 sm:px-6"
    >
      <div className="w-10 h-20 flex justify-center items-center sm:w-24">
        <img src={require("./logo.png")} />
      </div>
      <ul className="flex gap-4 mr-4">
        <li>{/* <Link to="/grocery">Grocery</Link> */}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
        </li>
        <li onClick={() => setLogin((login) => !login)}>
          {!login ? (
            <i className="fa fa-sign-in" aria-hidden="true"></i>
          ) : (
            <FontAwesomeIcon icon={faUser} />
          )}
        </li>
      </ul>
    </div>
  );
}

export default Header;
