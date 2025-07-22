import { Link } from "react-router-dom";
import { useState } from "../../node_modules/react";
import { CDN_LOGO_URL } from "../utils/constants";

function Header() {
  const [login, setLogin] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
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
            <Link to="/cart">Cart</Link>
          </li>
          <li onClick={() => setLogin((login) => !login)}>
            {!login ? `Login` : "Logout"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
