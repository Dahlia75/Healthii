import React, { Component } from 'react';

export default class UserCard extends Component {

    onRemoveUser() {
        this.props.onRemoveUser(this.props.currentUser);
    }

    render() {
    const {name, gender, photo, age} = this.props.user;
    const genderSign = gender === 'female' ? 'fa fa-venus' : 'fa fa-mars';
    const card = 

    <div className="card text-center">
        <img className="card-img-top img-fluid rounded-circle hvr-grow" src= { photo } alt="Person" />
        <div className="card-block">
            <h4 className="card-title">{ name } { age }
                <i className= { genderSign }> </i>
            </h4>
            <p> 
                
                    <i/>  { "Job Title" }
              
            </p>
            <p className="card-text">
                <small className="text-muted"> { "View Profile" } 
                    {/* <span className = {flagClassName}> </span> */}
                </small>
            </p>
            <i className = 'fa fa-remove fa-2x float-right hvr-grow' onClick = {this.onRemoveUser.bind(this)}> </i>
        </div>
    </div>;
    return card;

}
}