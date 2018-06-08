import React, {Component} from 'react';
 
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Scheduler extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),//.format("YYYY-MM-DD HH:mm:ss"),
      adate: '',
      atime: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    window.theDate = date;
    this.setState({
      adate: date.format("MMM Do YY"),
      atime: date.hour()
    });
    console.log("date", date.format("MMM Do YY"));
    console.log("hr", date.hour());


  }

  render() {
      return <DatePicker
      selected={this.state.startDate}
      onChange={this.handleChange}
      showTimeSelect
      minTime={moment().hours(7).minutes(0)}
      maxTime={moment().hours(20).minutes(0)}
      dateFormat="LLL"
    />
  }
}

export default Scheduler;