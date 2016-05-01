import React, { Component } from 'react';
import BrandSelector from '../components/BrandSelector';
import {brands, selectedBrand} from '../state';


class BrandBar extends Component {
    constructor(props) {
        super(props);
        this.state = { brands };

        brands.on('all', () => { this.setState({ brands })});
    }
    render() {
        return <BrandSelector
            brands={this.state.brands}
            onBrandSelect={(brandTitle) => selectedBrand.set({title: brandTitle})}/>
    }
}

export default BrandBar;