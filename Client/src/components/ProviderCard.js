import React, { Component } from 'react';
// import "../css/providers.css";
import "../css/bootstrap.min.css";  
import "../css/providers.css";
import "../css/main.css";

import { HashLink as Link } from 'react-router-hash-link';

export default class ProviderCard extends Component {
    constructor(props) {
    super(props);
    this.state = { open: false };
    }
    onRemoveProvider() {
        this.props.onRemoveProvide(this.props.currentProvider);
    }

    onBook(){
        this.props.onBook(this.props.provider.pid);
        //console.log("pid: ", this.props.provider.pid);

    }

    render() {
    const {pid, name, title, gender, age} = this.props.provider;
    const sid = this.props.serviceId;
    const path = `/services/${sid}/providers/${pid}`;
    console.log("path for provider ", path);
    const genderSign = gender === 'female' ? 'fa fa-venus' : 'fa fa-mars';
    const pimg = `http://localhost:3001/img/providers/${pid}.jpg`;
    console.log("pimg", pimg);
    const card =

    <div className="card text-center">
    <nav class="provider-container">
                <div className='name-provider'><h4 className="card-title">{ name }</h4></div>
                <div className='age-provider'><p > { age } years old</p></div>
                <i className= { genderSign }> </i>
                <div className='title-provider'><p>{ title }</p></div>
            </nav>
        <img className="card-img-top img-fluid rounded-circle hvr-grow" src= { pimg } alt="Person" />
        <div className="card-block">
        <div id="test">
            
            
            <div className="card-text">
                <Link to={path} className="button-provider-profile">View Profile
                </Link>
                <div className="cta-provider">
                    <button className="button-provider-book" onClick = { this.onBook.bind(this) }>
                      <span className="">Book now</span>
                    </button>
                </div>
            </div>
            <i className = 'fa fa-remove fa-2x float-right hvr-grow' onClick = {this.onRemoveProvider.bind(this)}> </i>
        </div>
        </div>
    </div>;
    return card;

}
}