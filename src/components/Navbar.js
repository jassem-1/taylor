import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showMegaBox, setShowMegaBox] = useState(false);

  const handleArrowClick = () => {
    setShowMegaBox((prevShowMegaBox) => !prevShowMegaBox);
  };

  const [active, setActive] = useState("nav_menu");
  const navToggle = () => {
    (active === "nav_menu") ?
    setActive("nav_menu nav__active"):
    setActive("nav_menu");
  };

  return (
    <nav className="nav">
      <ul className={active}>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Merch
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link" onClick={handleArrowClick}>
            Tour<span className="arrow" id="arrow-trade"></span>
          </a>
          <div className={`mega-box ${showMegaBox ? "show" : ""}`}>
            <div className="content">
              <div className="row">
                <ul className="mega-links">
                  <li>
                    <a href="#">U.S Dates</a>
                  </li>
                  <li>
                    <a href="#">International Dates</a>
                  </li>
                  <li>
                    <a href="#">TSTheErasTour</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            Newsletter
          </a>
        </li>
        <li className="nav_item">
          <a href="#" className="nav_link">
            TS Midnights
          </a>
        </li>
      </ul>
      <a href="#" className="brand">
        LOGO
      </a>

      <div onClick={navToggle} className="nav_toggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
