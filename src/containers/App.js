import React, {Component} from 'react';

import { cars as carsState } from '../state'
import CarByBrand from './CarByBrand';
import FavouriteCars from './FavouriteCars';
import BrandBar from './BrandBar';
import Navigation from './Navigation';
import Statistics from './Statistics';

import { selectedTab } from '../state/ui';
import { cars } from '../state/index';

const getComponentForTab = (tabTitle) => {
    switch (tabTitle) {
        case 'statistics':
            return <main>
                <Statistics/>
            </main>;

        case 'favourite':
            return <main>
                <FavouriteCars/>
            </main>;

        default:
            return <main>
                <BrandBar/>
                <CarByBrand/>
            </main>;
    }
};

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTabTitle: selectedTab.get('title'),
            favouriteCarCount: cars.getFavouriteCarCount()
        };
        selectedTab.on('change', () => this.setState({selectedTabTitle: selectedTab.get('title')}));
        cars.on('change:isFavourite', () => this.setState({favouriteCarCount: cars.getFavouriteCarCount()}))
    }
    render() {
        return <div className="container">
            <header>
                <Navigation favouriteCarCount={this.state.favouriteCarCount}/>
            </header>

            {getComponentForTab(this.state.selectedTabTitle)}
        </div>
    }
}

export default App;