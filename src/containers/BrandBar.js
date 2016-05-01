import React, { Component } from 'react';
import BrandSelector from '../components/BrandSelector';
import {brands} from '../state/data';
import { selectedBrand } from '../state/ui';


class BrandBar extends Component {
    constructor(props) {
        super(props);
        this.state = { brands };
        this.updateBrands = () => this.setState({
            brands
        });

        brands.on('all', this.updateBrands);
    }
    componentWillUnmount() {
        brands.off('all', this.updateBrands);
    }
    render() {
        return <BrandSelector
            brands={this.state.brands}
            onBrandSelect={(brandTitle) => selectedBrand.save({title: brandTitle})}/>
    }
}

export default BrandBar;