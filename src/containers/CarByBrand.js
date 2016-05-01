import React, { Component } from 'react';
import Cars from '../components/Cars';
import { cars, selectedBrand } from '../state';


class CarByBrand extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedBrand, cars };

        cars.on('all', () => { this.setState({ cars })});
        selectedBrand.on('all', () => { this.setState({ selectedBrand }) });

    }
    render() {
        let carsByBrand = this.state.selectedBrand.get("title") !== null
            ? this.state.cars.byBrand(selectedBrand.get("title"))
            : this.state.cars;
        return <Cars cars={carsByBrand}
                     changeFavourite={AddToFavourite}/>
    }
}

const AddToFavourite = (car) => (car.get("isFavourite") === false)
    ? <a className="addToFavourite"
         onClick={()=> {car.set({isFavourite: true})}}>add to favourite</a>
    : null;

export default CarByBrand;