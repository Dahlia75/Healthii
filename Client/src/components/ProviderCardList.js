import React, { Component } from 'react';
import ProviderCard from './ProviderCard';
//import "../css/providers.css";


export default class ProviderCardList extends Component {

    onRemoveProvider(provider) {
        this.props.handleRemoveProvider(provider);
    }

    onBook(providerId) {
        this.props.handleBooking(providerId);
    }

    render() {
        const cards = this.props.providers.providers.map((provider, index) => {
            return <ProviderCard
                key = { index }
                provider = { provider }
                onRemoveProvider = { this.onRemoveProvider.bind(this) }
                currentProvider = {provider}
                serviceId = {this.props.providers.sid}
                onBook = { this.onBook.bind(this) }
            />;
        });
        return (
            <div>
                { cards }
            </div>
        )
    }
}



