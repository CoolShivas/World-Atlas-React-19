import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Header = () => {

  const [showHumburMenu, setShowHumburMenu] = useState(false);

  const handlerOnHamburgerMenu = () => {
    console.log("HumburgerMenu");
    setShowHumburMenu(!showHumburMenu);
  };
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          {/* Starting of Logo Heading */}
          <div className="Logo">
            <NavLink to="/"><h1>World Atlas</h1></NavLink>
          </div>
          {/* Ending of Logo Heading */}
          {/* Starting of Navbar */}
          <nav className={showHumburMenu ? "menu-mobile" : "menu-web"}>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/country">Country</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
          {/* Ending of Navbar */}
          <div className="ham-menu">
            <button onClick={handlerOnHamburgerMenu}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;