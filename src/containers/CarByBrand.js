import React, { Component } from 'react';
import Cars from '../components/Cars';
import { cars } from '../state/data';
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
                     changeFavourite={AddToFavourite}/>
    }
}

const AddToFavourite = (car) => (car.get("isFavourite") === false)
    ? <a className="addToFavourite"
         onClick={()=> {car.save({isFavourite: true})}}>add to favourite</a>
    : null;

export default CarByBrand;