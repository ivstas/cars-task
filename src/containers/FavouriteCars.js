import React, { Component } from 'react';
import Cars from '../components/Cars';
import { cars } from '../state/data';


class FavouriteCars extends Component {
    constructor(props) {
        super(props);
        this.state = { favouriteCars: cars.favourite()};
        this.updateCars = () => this.setState({
            favouriteCars: cars.favourite()
        });
        cars.on('change:isFavourite', this.updateCars);
    }
    componentWillUnmount() {
        cars.off('change:isFavourite', this.updateCars);
    }
    render() {
        return <Cars cars={this.state.favouriteCars} changeFavourite={removeFromFavourite}/>
    }
}

const removeFromFavourite = (car) => {
    if (car.get("isFavourite") === true) {
        return <a className="removeFromFavourite" onClick={()=> {car.save({isFavourite: false})}}>remove from favourite</a>
    }

    return null;
};

export default FavouriteCars;