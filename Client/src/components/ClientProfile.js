import React, { Component } from 'react';

// import Api from '../lib/api.js';

import '../scss/main.scss';

export default class Provider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Dahlia',
      phone: '604 123 4444',
      address: 'gastown 123 laurel',
      gender: 'Female',
      age: 23,
      m_history: 'FILL IN BIO HERE FILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HERE FILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HERE FILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HERE'
    }
  }
  render() {
    return (
      <div class="container-profile">
        <main class="view-profile">
            <div class="overview">
              <h1 class="overview__heading">
                this.props.name
              </h1>
            </div>

            <div class="detail">
              <div class="description">
                <ul class="list">
                  <li class="list__item">Age: this.props.age Years Old</li>
                  <li class="list__item">Gender: this.props.gender</li>
                  <li class="list__item">Address: this.props.address</li>
                  <li class="list__item">Phone: this.props.phone</li>
                  <li class="list__item">Medical History: this.props.m_history</li>
                </ul>
              </div>

              <figure class="user-reviews">
                <div class="cta">
                  <button class="btn">
                      <span class="btn__visible">ACCEPT APPOINTMENT</span>
                      <span class="btn__invisible">ACCEPT APPOINTMENT</span>
                  </button>
                </div>
                <div class="cta">
                  <button class="btn">
                      <span class="btn__visible">DECLINE APPOINTMENT</span>
                      <span class="btn__invisible">DECLINE APPOINTMENT</span>
                  </button>
                </div>
              </figure>
            </div>
        </main>
      </div>
    );
  }
};