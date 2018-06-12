import React, { Component } from 'react';
import Star from './Star';
import Api from '../lib/api.js';

class FeedbackForm extends Component {

  constructor(props) {
   super(props);
   this.state = { 
    description: '',
    rating: 0,
    open: false
     };
  }

  postReview(){
    const des = this.state.description;
    const pid = this.props.pid;
    console.log("PID= ",pid);
    Api.post(`/api/reviews/${pid}/feedback`, { des });
    // .then(this.closeModal);
  }

  render() {
    return(
      <div>
        <form id="formfeedback" action="">
          <label></label>

          <input type="Feedback" name="" id="" 
                 onChange={(evt) => {this.setState({description: evt.target.value})} } className="Feedback" />
          <button type="submit" onClick={this.postReview.bind(this)}>Leave Feedback</button>
          <Star/>
        </form>
    </div>
    );
  };
}

export default FeedbackForm;