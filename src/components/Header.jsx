import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "../../node_modules/react";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
// import logo from "./logo2.png";

function Header() {
  const [login, setLogin] = useState(false);
  const userData = useContext(UserContext);

  const noCartItems = useSelector((store) => store.cart.items.length);

  return (
    <div
      className="
      z-100
      w-full fixed bg-yellow-500 text-[10px] sm:text-xl
      flex items-center justify-between 
      mb-2 sm:px-6"
    >
      <div className="w-10 h-20 flex justify-center items-center sm:w-24">
        <img src="./logo.png" />
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
        <li className="relative">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="absolute text-xs font-medium" title="cart">
              {noCartItems}
            </span>
          </Link>
        </li>
        <li onClick={() => setLogin((login) => !login)}>
          <button>
            {!login ? (
              <>
                Login
                <i className="fa fa-sign-in" aria-hidden="true"></i>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faUser} />
                {/* {userData.loggedInUser} */}
                Logout
                <i className="fa fa-sign-out" aria-hidden="true"></i>
              </>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
