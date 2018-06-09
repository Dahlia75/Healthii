import React, { Component } from 'react';
//import Api from '../lib/api.js';

import '../scss/main.scss';
import { HashLink as Link } from 'react-router-hash-link';

function ServicesCard(props) {
  const path = `/services/${props.id}/providers`
  const services_img = `card__picture card__picture--${props.id}`

  return (
    <div className="col-1-of-3">
        <div className="card">
            <div className="card__side card__side--front">
                <div className={services_img}>
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

    render() {
        const cards = this.props.cards.map(card => {
            return <ServicesCard key = { card.id } id={ card.id } name={ card.name } price={ card.price } descripton={ card.descripton } />
        })

        return (
            <section id="services" className="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">Our Services</h2>
                </div>
                <div className="gridrow">
                    { cards }
                </div>
            </section>
        );
    }
};

export default Services;
