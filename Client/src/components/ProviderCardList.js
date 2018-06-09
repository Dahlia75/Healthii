import React, { Component } from 'react';
import ProviderCard from './ProviderCard';
//import "../css/providers.css";


export default class ProviderCardList extends Component {

    onRemoveProvider(provider) {
        this.props.handleRemoveProvider(provider);
    }

    render() {
        const cards = this.props.providers.providers.map((provider, index) => {
            return <ProviderCard
                key = { index }
                provider = { provider }
                onRemoveProvider = { this.onRemoveProvider.bind(this) }
                currentProvider = {provider}
                serviceId = {this.props.providers.sid}
            />;
        });
        return (
            <div>
                { cards }
            </div>
        )
    }
}



