import React, {Component} from 'react';

import { cars as carsState } from '../state'
import CarByBrand from './CarByBrand';
import BrandBar from './BrandBar';
import Navigation from './Navigation';

import { selectedTab } from '../state/ui';
import { cars } from '../state/index';
import events from '../events';

const getComponentForTab = (tabTitle) => {
    switch (tabTitle) {
        case 'statistics':
            return <main>Statistics</main>;

        case 'favourite':
            return <main>Favourite</main>;

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
        events.listenTo(selectedTab, 'all', () => this.setState({selectedTabTitle: selectedTab.get('title')}));
        // todo: listen only for fav attr change in model
        events.listenTo(cars, 'all', () => this.setState({favouriteCarCount: cars.getFavouriteCarCount()}))
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