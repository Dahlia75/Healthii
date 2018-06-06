import React, { Component } from 'react';

export default class DropdownSelection extends Component {

    onDropdownSelectionValueChange(e) {
        const filterBy = e.target.id;
        this.props.handleDropdownSelectionValueChange(filterBy);
    }

    render() {
        return (
            <div className="dropdown">

            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Show { this.props.filterBy }
            </button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" id="all" onClick={ this.onDropdownSelectionValueChange.bind(this) }>All</a>
                <a className="dropdown-item" id="female" onClick={ this.onDropdownSelectionValueChange.bind(this) }>Female</a>
                <a className="dropdown-item" id="male" onClick={ this.onDropdownSelectionValueChange.bind(this) }>Male</a>
            </div>

            </div>
        );
    };

}