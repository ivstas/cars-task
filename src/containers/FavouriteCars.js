import React, { Component } from 'react';
import Cars from '../components/Cars';
import { favouriteCars } from '../state/data';

class FavouriteCars extends Component {
    constructor(props) {
        super(props);
        this.state = { favouriteCars };
        this.updateCars = () => this.setState({
            favouriteCars
        });
        favouriteCars.on('all', this.updateCars);
    }
    componentWillUnmount() {
        favouriteCars.off('all', this.updateCars);
    }
    render() {
        return <Cars cars={this.state.favouriteCars}
                     favouriteCars={this.state.favouriteCars}
                     changeFavourite={removeFromFavourite}/>
    }
}

const removeFromFavourite = (car) =>
    <a className="removeFromFavourite" onClick={()=> {favouriteCars.remove(car); Backbone.sync('update', favouriteCars)}}>remove from favourite</a>;

export default FavouriteCars;