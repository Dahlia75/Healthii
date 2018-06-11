import React, {Component} from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Scheduler extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: moment(),
      adate: moment().format("MMM Do YY"),
      atime: moment().hour()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
   console.log("date: ", date)
    this.setState({
      selected: date,
      adate: date.format("MMM Do YY"),
      atime: date.hour()
    });

    if (this.state.adate === date.format("MMM Do YY") && this.state.atime !== date.hour()){
      this.props.onDateTimeChanged(date.format("MMM Do YY"), date.hour());
    }
  }

  render() {
    return <DatePicker
    selected={this.state.selected}
    onChange={this.handleChange}
    showTimeSelect
    timeIntervals={60}
    minTime={moment().hours(7).minutes(0)}
    maxTime={moment().hours(20).minutes(0)}
    // minDate={moment()}
    dateFormat="LLL"
    />
  }
}

export default Scheduler;