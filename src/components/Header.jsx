import { CDN_LOGO_URL } from "../utils/constants";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>🛒</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
