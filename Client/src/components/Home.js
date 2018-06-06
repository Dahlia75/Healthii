import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Api from '../lib/api.js';

import '../App.css';
import Services from './Services';

// import images for services
import Logo from '../img/HC2Go1.png';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        cards: []
      }
    }
  load() {
    Api.get('/api').then(cards => {
      this.setState({
        cards
      });
    });
  }

  componentDidMount() {
        this.load();
  }
  render() {
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
        <Services cards={this.state.cards} />
      </div>
    );
  }
};

export default Home;