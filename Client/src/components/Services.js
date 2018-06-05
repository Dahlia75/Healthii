import React, { Component } from 'react';

import '../scss/main.scss';

function ServicesCard(props) {
  const descriptions = props.descriptions.map(description => {
    return <li>{ description }</li>
  });

  return (
    <div className="col-1-of-3">
        <div className="card">
            <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">{ props.title }</span>
                </h4>
                <div className="card__details">
                    <ul>
                        { descriptions }
                    </ul>
                </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                    <div className="card__price_box">
                        <p className="card__price-only">From</p>
                        <p className="card__price-value">{ props.price }</p>
                    </div>
                    <a href="#" className="btn btn--white">Book now!</a>
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
            cards: [
            {title: 'Nurse',
            price: '50/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description']
            },
            {title: 'Physical Therapy',
            price: '60/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description']
            },
            {title: 'Mental Wellness',
            price: '30/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description']
            },
            {title: 'Nurse',
            price: '20/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description']
            },
            {title: 'Physical Therapy',
            price: '70/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description']
            },{title: 'Mental Wellness',
            price: '80/houre',
            descriptions: ['Add Description', 'Add Description', 'Add Description']
            }]
        }
    }

    componentDidMount() {
        // make request to server for services data
        // take response and set state to replace the array of cards
    }

    render() {
        const cards = this.state.cards.map(card => {
            return <ServicesCard title={ card.title } price={ card.price } descriptions={ card.descriptions } />
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