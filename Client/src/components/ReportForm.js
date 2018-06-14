import React, { Component } from 'react';
import Api from '../lib/api.js';

class ReportForm extends Component {

  constructor(props) {
   super(props);
   this.state = { 
    report: '',
    open: false
     };
  }

  postReport(){
    const report = this.state.report;
    const aid = this.props.aid;
    console.log("report ==>",report,aid);
    Api.post(`/appointments/${aid}/report`, { report });
    // .then(this.closeModal);
  }

  render() {
    return(
      <div>
        <form id="formfeedback" action="">
          <label ></label>
          <input type="Feedback" name="" id="" onChange={(evt) => {this.setState({report: evt.target.value})} } className="Feedback" />
          <button type="submit" onClick={this.postReport.bind(this)}>Enter Report</button>
        </form>
    </div>
    );
  };
}

export default ReportForm;