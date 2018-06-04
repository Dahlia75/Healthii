import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import '../App.css';
import Services from './Services';

// import images for services
import Logo from '../img/HC2Go1.png';


const Home = () => {
  return(
    <div className="App">
      <section className="homepage">
        <header className="header">
          <div className="header__logo-box">
            <img src={Logo} alt="Logo" className="header__logo"/>
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--sub">Healthcare To Go</span>
            </h1>
            <Link to="/#services" className="btn btn--white btn--animated">
              Discover our services
            </Link>
          </div>
        </header>
      </section>
      <Services />
    </div>
  );
};

export default Home;