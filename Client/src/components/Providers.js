import React, { Component } from 'react';
//import { getProviders } from './RandomProviders';
import ProviderCard from './ProviderCard';
import ProviderCardList from './ProviderCardList';
import { without, filter } from 'lodash';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ServiceSortDropDown from './DropdownSelection';
import Api from '../lib/api.js';

export default class Providers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            providers: [],
            filterBy: 'all',
            selectedService: ''
        };
    }

    load() {
        Api.get('/api/services/:sid/providers').then(props => {
            this.setState({
                providers: props.providers,
                selectedService : props.serviceName,
            });
        });
    }
    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        this.load();
    }

    changeDropdownSelectionValue(filterBy) {
        this.setState({
            filterBy
        });
    }


    render() {

        let currentProviders = this.state.providers;

        //male | female | all
        const filterBy = this.state.filterBy;

        if(filterBy !== 'all') {
            currentProviders = filter(currentProviders, provider => provider.gender === filterBy)
        }

        return (
            <div>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <div className ="form-inline">
                            <div className = "mr-3">
                                <button>Choose Time</button>
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
                                { currentProviders.length } Providers Available for { this.state.selectedService }
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
