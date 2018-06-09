import React, { Component } from 'react';
import Api from '../lib/api.js';
//import Api from '../lib/api.js';

import '../scss/main.scss';

function ProviderReviews(props) {
  return (

      <figure className="review">
        <blockquote className="review__text">
            { props.description }
        </blockquote>
        <figcaption className="review__provider">
          <div className="review__provider-box">
            <p className="review__provider-name">{ props.client_name }</p>
            <p className="review__provider-date">{ props.review_date }</p>
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

    console.log("provider params, wheeeeee", this.props.match.params);

    this.state = {
      provider_info: {},
      reviews: [],
      name: 'Daniel',
      title: 'Physical Therapist',
      bio: 'FILL IN BIO HERE FILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HERE FILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HERE FILL IN BIO HEREFILL IN BIO HEREFILL IN BIO HERE',
      gender: 'male',
      age: '42',
      image: '../img/Nurse.png',
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


  load() {
    const sid = this.props.match.params.sid;
    const pid = this.props.match.params.pid;

    Api.get(`/api/services/${sid}/providers/${pid}`).then(provider => {
      console.log("provider: ", provider);
      this.setState({
          provider_info: provider.p_info[0],
          reviews: provider.reviews
      });
    });
  }

  componentDidMount(){
    this.load();
  }


  render() {
    const provider = this.state;
    const pimg = `http://localhost:3001/img/providers/${provider.provider_info.id}.jpg`;
    const reviews = provider.reviews.map((review, index) => {
      return <ProviderReviews key={index} client_name={ review.client_name } review_date={ review.review_date } rating={ review.rating } description={ review.description} />
    })
    return (

      <div className="container-profile">
        <main className="view-profile">
          <div className="overview">
            <figure className="gallery__item">
              <img src={pimg} alt="Provider" className="gallery__photo" />
            </figure>
            <h1 className="overview__heading">
              { provider.provider_info.first_name } { provider.provider_info.last_name } - { provider.provider_info.title }
            </h1>
            <div className="overview__stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="overview__rating">
              <div className="overview__rating-average"> { this.state.rating_avg }</div>
            </div>
          </div>

          <div className="detail">
            <div className="description">
              <p className="paragraph">
                <span> Gender: </span>
                <span>{ provider.provider_info.gender } </span>
                <span> Age: </span>
                <span>{ provider.provider_info.age } </span>
              </p>
              <p className="paragraph"> <h4> Biography:</h4> { provider.provider_info.bio } </p>
            </div>

            <figure className="provider-reviews">
              { reviews }
            </figure>

          </div>
          <div className="cta">
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible">NOW!!!!</span>
            </button>
          </div>

        </main>
      </div>
    );
  }
};

export default Provider;