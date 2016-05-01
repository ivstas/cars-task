import React, {Component} from 'react';

import CarByBrand from './CarByBrand';
import FavouriteCars from './FavouriteCars';
import BrandBar from './BrandBar';
import Navigation from '../components/Navigation';
import Statistics from './Statistics';

import { selectedTab } from '../state/ui';
import { favouriteCars } from '../state/data';

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
            favouriteCarCount: favouriteCars.size()
        };
        this.updateSelectedTab = () => this.setState({
            selectedTabTitle: selectedTab.get('title'),
        });
        this.updateFavouriteCarCount = () => this.setState({
            favouriteCarCount: favouriteCars.size()
        });
        selectedTab.on('change', this.updateSelectedTab);
        favouriteCars.on('add remove', this.updateFavouriteCarCount)
    }
    componentWillUnmount() {
        selectedTab.off('change', this.updateSelectedTab);
        favouriteCars.off('add remove', this.updateFavouriteCarCount)
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