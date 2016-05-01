import React, { Component } from 'react';
import Cars from '../components/Cars';
import { cars } from '../state';
import events from '../events';


class FavouriteCars extends Component {
    constructor(props) {
        super(props);
        this.state = { favouriteCars: cars.favourite()};
        // todo: listen only to fav change
        events.listenTo(cars, 'all', () => { this.setState({ favouriteCars: cars.favourite()})});
    }
    render() {
        return <Cars cars={this.state.favouriteCars}/>
    }
}

export default FavouriteCars;