import React, { Component } from 'react';
import Cars from '../components/Cars';
import { cars, selectedBrand } from '../state';
import events from '../events';


class CarByBrand extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedBrand, cars };

        events.listenTo(cars, 'all', () => { this.setState({ cars })});
        events.listenTo(selectedBrand, 'all', () => {this.setState({ selectedBrand })});

    }
    render() {
        let carsByBrand = this.state.selectedBrand.get("title") !== null
            ? this.state.cars.byBrand(selectedBrand.get("title"))
            : this.state.cars;
        return <Cars cars={carsByBrand}/>
    }
}

export default CarByBrand;