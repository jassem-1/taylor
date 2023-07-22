import React from 'react';
import './NavbarTry.css'; 
import 'font-awesome/css/font-awesome.min.css';

const NavbarTry = () => {
   
  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon" >  &#9776; </label>
        <div className="content">
          <div className="logo"><a href="#">SingerName</a></div>
          <ul className="links">
            <li><a href="#"> Merch</a></li>
            <li>
              <a href="#" className="desktop-link">Tour</a>
              <input type="checkbox" id="show-features" />
              <label htmlFor="show-features">Tour</label>
              <ul>
                <li><a href="#">U.S Dates</a></li>
                <li><a href="#">International Dates</a></li>
                <li><a href="#">TSTheErasTour</a></li>
              </ul>
            </li>
            <li>
              <a href="#"> Newsletter</a>
            </li>
            <li><a href="#"> TS Midnights</a></li>
          </ul>
        </div>
     
      </nav>
    </div>
  );
};

export default NavbarTry;
