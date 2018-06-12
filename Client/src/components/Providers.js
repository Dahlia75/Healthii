import React, { Component } from 'react';
// import ReactDom from 'react-dom';

import ProviderCardList from './ProviderCardList';
import { filter } from 'lodash';
import 'react-select/dist/react-select.css';
// import ServiceSortDropDown from './DropdownSelection';
import Api from '../lib/api.js';
import Scheduler from './DateTime';
import Popup from "reactjs-popup";
// import ConfirmationPopup from './ConfirmationPopup.js'

import "../css/providers.css";


class Providers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: [],
      filterBy: 'all',
      selectedService: '',
      selectedSid: '',
      selectedDate: '',
      selectedTime: '',
      selectedList: []
    };
  }

  load() {
    const sid = this.props.match.params.sid;
    Api.get(`/api/services/${sid}/providers`)
      .then(service => {
        this.setState({
          providers: service.providers,
          reviews: service.reviews,
          selectedService : service.service_name,
          selectedList : service.providers,
          selectedSid : sid,
          open: false
        });
      });
  }

  componentWillMount() {
      this.load();
  }

  // componentDidMount() {
  //   this.load();
  // }
  openModal = () => {
    console.log("open Popup");
      this.setState({ open: true });
  }

  closeModal = () => {
      this.setState({ open: false });
  }

  setSelectedList(selectedList) {
    this.setState({
      selectedList
    });
  }

  changeDropdownSelectionValue(filterBy) {
    this.setState({
      filterBy
    });
  }

  findObjectByKey(array, key, key2, value, value2) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value /*&& array[i][key2] === value2*/) {
        return array[i];
      }
    }
    return null;
  }

  filterProvidersByTime(selectedDate, selectedTime){
    let current = filter(this.state.providers, provider => !this.findObjectByKey(provider.app_slots, 'date', 'first_time', selectedDate, selectedTime));
    console.log("provider appoinments", current);
    return current;
  }

  chooseTime(selectedDate, selectedTime){
    this.setState({
      selectedDate,
      selectedTime
    });
    this.setSelectedList(this.filterProvidersByTime(selectedDate, selectedTime));
  }

  handleBooking(providerId){
    console.log("providerId: ", providerId);
    const data = {
      selectedDate: this.state.selectedDate,
      selectedTime: this.state.selectedTime
    }
    const sid = this.props.match.params.sid;
    Api.post(`/services/${sid}/providers/${providerId}/book`, { data })
    .then(console.log("boking data", data))
    .then(this.openModal)
  }

  render() {
    let currentProviders = {
      providers: this.state.selectedList,
      sid: this.state.selectedSid
    }

    return (
      <div>
        <header className='listproviders'>List of providers</header>
        <div >
          <h4>Choose Time</h4>
        <div className='flexy'>
        <span className='inline-b'>
          <Scheduler onDateTimeChanged={this.chooseTime.bind(this)} />
          </span>
        <span className='inline-b'>
        <h3 className='providers-available'>
            { currentProviders.providers.length } Providers Available for { this.state.selectedService }
          </h3>
        </span>
        </div>
        </div>
        <div>
         
        </div>
        <div className="card-columns" >
          <ProviderCardList
              providers = { currentProviders }
              handleBooking = { this.handleBooking.bind(this) }
          />
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}>
            <div >
              <a className="close" onClick={this.closeModal}>
                &times;
              </a>
              Your booking request has been submitted waiting for approval.
              Thanks for chosing our services.
            </div>
          </Popup>
        </div>
      </div>

    );
  }
}

export default Providers;