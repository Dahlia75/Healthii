import React, { Component } from 'react';

import '../scss/main.scss';

function ProviderReviews(props) {
  return (

      <figure className="review">
        <blockquote className="review__text">
            { props.description }
        </blockquote>
        <figcaption className="review__user">
          <div className="review__user-box">
            <p className="review__user-name">{ props.client_name }</p>
            <p className="review__user-date">{ props.review_date }</p>
          </div>
          <div className="review__rating">{ props.rating }</div>
        </figcaption>
      </figure>
  )
}

class Provider extends Component {
  // const propsoutput = Object.keys(props).map(key => {
  //   return <li>{ key }: { JSON.stringify(props[key]) }</li>
  // });
  constructor(props) {
    super(props);

    this.state = {
      name: 'Daniel',
      title: 'Physical Therapist',
      bio: 'FILL IN BIO HERE FILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HERE FILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HERE FILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HERE',
      gender: 'male',
      age: '42',
      image: '',
      rating_avg: 3.5,
      reviews: [
        {client_name: 'Nick Smith',
        review_date: 'Feb 23rd, 2017',
        rating: 3,
        description: 'ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW.'
        },
        {client_name: 'Nick Smith',
        review_date: 'Feb 3rd, 2017',
        rating: 5,
        description: 'ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW ADD REVIEW.'
        }
      ]
    }
  }

  render() {
    const reviews = this.state.reviews.map(review => {
      return <ProviderReviews client_name={ review.client_name } review_date={ review.review_date } rating={ review.rating } description={ review.description} />
    })
    return (

      <div className="container-profile">
        <main className="view-profile">
          <div className="overview">
            <figure className="gallery__item">
              <img src="../img/Nurse.png" alt="Provider" className="gallery__photo" />
            </figure>
            <h1 className="overview__heading">
              { this.state.name } - { this.state.title }
            </h1>
            <div className="overview__stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>

            <div className="overview__location">
              <i className="fas fa-map-marker-alt"></i>
              <button className="btn-inline">Vancouver, Canada</button>
            </div>
            <div className="overview__rating">
              <div className="overview__rating-average"> { this.state.rating_avg }</div>
            </div>
          </div>

          <div className="detail">
            <div className="description">
              <p className="paragraph"> { this.state.bio } </p>
            </div>

          </div>
          <button className="btn-inline">Show all <span></span></button>
          <div className="cta">
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible">NOW!!!!</span>
            </button>
          </div>
          <figure className="user-reviews">
            { reviews }
          </figure>
        </main>
      </div>
    );
  }
};

export default Provider;