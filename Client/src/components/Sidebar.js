import React from 'react';
// import { NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Api from '../lib/api.js';
import '../css/main.css';

function logOut(){
  Api.post('/api/logout');
  console.log("logedout");
}
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
          <li className="navigation__item"><a href="/#services" className="navigation__link"><span>01</span>Services</a></li>
          <li className="navigation__item"><a href="/clients" className="navigation__link"><span>02</span>Client Reports</a></li>
          <li className="navigation__item"><a href="/services/6/providers" className="navigation__link"><span>03</span>Providers</a></li>
          <li className="navigation__item"><a href="/" className="navigation__link"><span>04</span>Home</a></li>
          <li className="navigation__item"><a href="/reviews" className="navigation__link"><span>05</span>Reviews</a></li>
          <li className="navigation__item"><a href="/login" className="navigation__link"><span></span><button>Login</button></a></li>
          <li className="navigation__item"><a href="/" className="navigation__link"><span></span><button onClick={logOut}> Logout </button></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebare;