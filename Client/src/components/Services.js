import React, { Component } from 'react';
import Api from '../lib/api.js';

import '../scss/main.scss';
import { HashLink as Link } from 'react-router-hash-link';

function ServicesCard(props) {
  // const descriptions = props.description.map(description => {
  //   return <li>{ description }</li>
  // });
  const path = `/services/${props.id}/providers`

  return (
    <div className="col-1-of-3">
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">{ props.name }</span>
                </h4>
                <div className="card__details">
                    <ul>
                        { props.descripton }
                    </ul>
                </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                    <div className="card__price_box">
                        <p className="card__price-only">From</p>
                        <p className="card__price-value">{ props.price }</p>
                    </div>
                    <Link to={path} className="btn btn--white">Book now!
                   </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

class Services extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards:[]
        }
    }


    // load() {
    //     Api.get('/api').then(cards => {
    //       this.setState({
    //         cards
    //       });
    //     });
    //   }

    // componentDidMount() {
    //   this.load();
    // }
    // componentDidMount() {
    //     // make request to server for services data

    //     // take response and set state to replace the array of cards
    // }

    render() {
        console.log(this.props);
        const cards = this.props.cards.map(card => {
            return <ServicesCard name={ card.name } price={ card.price } descripton={ card.descripton } />
        })

        return (
            <section id="services" className="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">Our Services</h2>
                </div>
                <div className="row">
                    { cards }
                </div>
            </section>
        );
    }
};

export default Services;
