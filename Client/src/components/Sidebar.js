import React from 'react';
// import { NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

import '../css/main.css';

const Sidebare = () => {
  return(
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><Link to="/#services" className="navigation__link"><span></span>Our Services</Link></li>
          <li className="navigation__item"><a href="#repors" className="navigation__link"><span>02</span>Client Reports (Provider View)</a></li>
          <li className="navigation__item"><a href="#bookservices" className="navigation__link"><span>03</span>Book Services</a></li>
          <li className="navigation__item"><a href="#upcoming" className="navigation__link"><span>04</span>Upcoming Appointments</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebare;