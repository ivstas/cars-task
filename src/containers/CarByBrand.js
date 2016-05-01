import React, { Component } from 'react';
import Cars from '../components/Cars';
import { cars, favouriteCars } from '../state/data';
import { selectedBrand } from '../state/ui';


class CarByBrand extends Component {
    constructor(props) {
        super(props);
        this.state = { cars, selectedBrandTitle: selectedBrand.get('title') };

        this.updateCars = () => { this.setState({cars})};
        this.updateSelectedBrand = () => { this.setState({selectedBrandTitle: selectedBrand.get('title')})};

        cars.on('all', this.updateCars);
        selectedBrand.on('all', this.updateSelectedBrand);
    }
    componentWillUnmount() {
        cars.off('all', this.updateCars);
        selectedBrand.off('all', this.updateSelectedBrand);
    }
    render() {
        let carsByBrand = this.state.selectedBrandTitle !== null
            ? this.state.cars.byBrand(this.state.selectedBrandTitle)
            : this.state.cars;
        return <Cars cars={carsByBrand}
                     favouriteCars={favouriteCars}
                     changeFavourite={AddToFavourite}/>
    }
}

const AddToFavourite = (car) => (!favouriteCars.contains(car))
    ? <a className="addToFavourite"
         onClick={()=> {favouriteCars.add(car); Backbone.sync('update', favouriteCars)}}>add to favourite</a>
    : null;

export default CarByBrand;