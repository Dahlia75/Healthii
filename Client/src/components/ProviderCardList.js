import React, { Component } from 'react';
import ProviderCard from './ProviderCard';

export default class ProviderCardList extends Component {

    onRemoveProvider(provider) {
        this.props.handleRemoveProvider(provider);
    }

    render() {
        const cards = this.props.providers.map((provider, index) => {
            return <ProviderCard
                key = { index }
                provider = { provider }
                onRemoveProvider = { this.onRemoveProvider.bind(this) }
                currentProvider = {provider}
            />;
        });
        return (
            <div>
                { cards }
            </div>
        )
    }
}



