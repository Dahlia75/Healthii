import React, { Component } from 'react';
//import { getUsers } from './RandomUsers';
import UserCard from './UserCard';
import UserCardList from './UserCardList';
import { without, filter } from 'lodash';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import ServiceSortDropDown from './ServiceSortDropdown';

export default class Providers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventName: 'for your chosen service',
            users: [],
            selectedGender: '',
            filterBy: 'all',
            selectedService: ''
        };
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    // Change with Dummy data until the database is in
    componentDidMount() {
        // getUsers(20, users => {
        //     this.setState({
        //         users
        //     });
        // })
    }

    changeSelectedGender(selectedGender) {
        this.setState({
            selectedGender
        });
    }

    changeSelectedCountry(selectedCountry) {
        this.setState({
            selectedCountry
        });
    }

    changeServiceSortDropdownValue(filterBy) {
        this.setState({
            filterBy
        });
    }


    render() {

        let currentUsers = this.state.users;

        //male | female | all
        const filterBy = this.state.filterBy;

        if(filterBy !== 'all') {
            currentUsers = filter(currentUsers, user => user.gender === filterBy)
        }

        return (
            <div>
                <div className="row mb-3">
                    <div className="col-lg-6">
                        <div className ="form-inline">
                            <div className = "mr-3">
                                <button>Choose Time</button>
                                <ServiceSortDropDown
                                handleServiceSortDropdownValueChange = { this.changeServiceSortDropdownValue.bind(this)}
                                filterBy = { this.state.filterBy }
                                />
                        </div>
                        </div>
                    </div>
                    <div className = "col-lg-6">
                        <div>
                            <h3 className = "float-right">
                                { currentUsers.length } Providers Available { this.state.eventName }
                            </h3>
                        </div>
                    </div>
                </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="card-columns">
                        <UserCardList
                            users = { currentUsers }
                        />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
