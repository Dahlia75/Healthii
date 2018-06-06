import React, { Component } from 'react';

export default class ServiceSortDropdown extends Component { 
    
    onServiceSortDropdownValueChange(e) {
        const filterBy = e.target.id;
        this.props.handleServiceSortDropdownValueChange(filterBy);
    }
    
    render() {
        return (
            <div className="dropdown">

            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Show { this.props.filterBy }
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" id="all" onClick={ this.onServiceSortDropdownValueChange.bind(this) }>All</a>
                <a className="dropdown-item" id="female" onClick={ this.onServiceSortDropdownValueChange.bind(this) }>Female</a>
                <a className="dropdown-item" id="male" onClick={ this.onServiceSortDropdownValueChange.bind(this) }>Male</a>
            </div>

            </div>
        );
    };

}