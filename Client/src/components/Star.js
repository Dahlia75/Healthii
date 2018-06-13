import React from 'react';
// import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';

class Star extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;

    return (
      <div id='star'>
       
      </div>
    );
  }
}

export default Star;