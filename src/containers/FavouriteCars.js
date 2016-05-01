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
        // todo: unsubscribe on unmount

    }
    render() {
        return <Cars cars={this.state.favouriteCars} changeFavourite={removeFromFavourite}/>
    }
}

const removeFromFavourite = (car) => {
    if (car.get("isFavourite") === true) {
        return <a className="removeFromFavourite" onClick={()=> {car.set({isFavourite: false})}}>remove from favourite</a>
    }

    return null;
};

export default FavouriteCars;