import React, { Component } from 'react';
import BrandSelector from '../components/BrandSelector';
import {brands, selectedBrand} from '../state';
import events from '../events';

class BrandBar extends Component {
    constructor(props) {
        super(props);
        this.state = { brands };

        events.listenTo(brands, 'all', () => { this.setState({ brands })});
        this.selectBrand = this.selectBrand.bind(this);
    }
    render() {
        return <BrandSelector brands={this.state.brands} onBrandSelect={this.selectBrand}/>
    }
    selectBrand(brandTitle) {
        selectedBrand.set({title: brandTitle})
    }
}

export default BrandBar;