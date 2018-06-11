import React, { Component } from 'react';
//import { HashLink as Link } from 'react-router-hash-link';
//import { Form, TextArea } from 'react-form';
import Star from './Star';
import Api from '../lib/api.js';

class FeedbackForm extends Component {

  render() {
    return(
      <div>
        <form id="formfeedback" action="">
          <label for=""></label>

          <input type="Feedback" name="" id="" className="Feedback" />
          <button type="submit">Leave Feedback</button>
          <Star/>
        </form>
    </div>
    );
  };
}

export default FeedbackForm;