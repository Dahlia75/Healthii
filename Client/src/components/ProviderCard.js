import React, { Component } from 'react';
//import "../css/providers.css";
import { HashLink as Link } from 'react-router-hash-link';

export default class ProviderCard extends Component {

    onRemoveProvider() {
        this.props.onRemoveProvide(this.props.currentProvider);
    }

    render() {
    const {pid, name, title, gender, age} = this.props.provider;
    const sid = this.props.serviceId;
    const path = `/services/${sid}/providers/${pid}`;
    console.log("path for provider ", path);
    const genderSign = gender === 'female' ? 'fa fa-venus' : 'fa fa-mars';
    const pimg = `http://localhost:3001/img/providers/${pid}.jpg`;
    const card =

    <div className="card text-center">
        <img className="card-img-top img-fluid rounded-circle hvr-grow" src= { pimg } alt="Person" />
        <div className="card-block">
            <h4 className="card-title">Name: { name }</h4>
            <p > { age } years old</p>
            <i className= { genderSign }> </i>
            <p>Job Title: { title }</p>
            <p className="card-text">
                <small className="text-muted"> { "View Profile" }
                    <Link to={path} className="btn btn--white">View Profile
                   </Link>
                    {/* <span className = {flagClassName}> </span> */}
                </small>
            </p>
            <i className = 'fa fa-remove fa-2x float-right hvr-grow' onClick = {this.onRemoveProvider.bind(this)}> </i>
        </div>
    </div>;
    return card;

}
}