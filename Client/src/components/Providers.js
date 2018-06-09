import React, { Component } from 'react';
//import { getProviders } from './RandomProviders';
// import ProviderCard from './ProviderCard';
import ProviderCardList from './ProviderCardList';
import { filter } from 'lodash';
// import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ServiceSortDropDown from './DropdownSelection';
import Api from '../lib/api.js';
import Scheduler from './DateTime';

//import "../css/providers.css";


export default class Providers extends Component {

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
        Api.get(`/api/services/${sid}/providers`).then(service => {
            // const providers = service.providers.reduce((acc, provider) => {
            //     return acc.concat(current.providers);
            // }, []);
        // console.log("service: ", service.providers);

            this.setState({
                providers: service.providers,
                selectedService : service.service_name,
                selectedList : service.providers,
                selectedSid : sid
            });
        });
    }
    componentWillMount() {
        //console.log('componentWillMount');
        this.load();

        // console.log("state: ", this.state);
    }

    // componentDidMount() {

    // }

    setSelectedList(selectedList) {
      this.setState({
          selectedList
        });
      console.log("selectedList ", this.state.selectedList);
    }

    changeDropdownSelectionValue(filterBy) {
        this.setState({
            filterBy
        });
    }

    findObjectByKey(array, key, value) {
      for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
              return array[i];
          }
      }
      return null;
    }

    filterProvidersByTime(){
      //let current = this.state.providers;
      // const appoinments = currentProviders.reduce((acc, current) => {
      //           return acc.concat(current.app_slots);
      //       }, []);


      let current = filter(this.state.providers, provider => !this.findObjectByKey(provider.app_slots, 'date', this.state.selectedDate));
      console.log("provider appoinments", current);
      return current;
    }

    chooseTime(selectedDate, selectedTime){
      this.setState({
          selectedDate,
          selectedTime
        });
      //console.log(this.state.selectedDate, this.state.selectedTime)
      this.setSelectedList(this.filterProvidersByTime());
    }

    render() {

    // let currentProviders = this.state.selectedList;
      let currentProviders = {
        providers: this.state.selectedList,
        sid: this.state.selectedSid
      }
    // console.log("SelectedList ", currentProviders);
        //male | female | all
        // const filterBy = this.state.filterBy;

        // if(filterBy !== 'all') {
        //     currentProviders = filter(currentProviders, provider => provider.gender === filterBy)
        // }

        return (
            <div>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <div className ="form-inline">
                            <div className = "mr-3">
                                <button>Choose Time</button>
                                <Scheduler onDateTimeChanged={this.chooseTime.bind(this)}/>
                                <ServiceSortDropDown
                                handleDropdownSelectionValueChange = { this.changeDropdownSelectionValue.bind(this)}
                                filterBy = { this.state.filterBy }
                                />
                        </div>
                        </div>
                    </div>
                    <div className = "col-lg-6">
                        <div>
                            <h3 className = "float-right">
                                { currentProviders.providers.length } Providers Available for { this.state.selectedService }
                            </h3>
                        </div>
                    </div>
                </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card-columns">
                        <ProviderCardList
                            providers = { currentProviders }
                        />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
