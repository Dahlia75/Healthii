import React, {Component} from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Scheduler extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      adate: '',
      atime: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      adate: date.format("MMM Do YY"),
      atime: date.hour()
    });
    // console.log("date", date.format("MMM Do YY"));
    // console.log("hr", date.hour());
    this.props.onDateTimeChanged(date.format("MMM Do YY"), date.hour());
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