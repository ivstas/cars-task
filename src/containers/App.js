import React, {Component} from 'react';

import { cars as carsState } from '../state'
import CarByBrand from './CarByBrand';
import BrandBar from './BrandBar';
import Navigation from './Navigation';

import { selectedTab } from '../state/ui';
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
            selectedTabTitle: selectedTab.get('title')
        };
        events.listenTo(selectedTab, 'all', () => this.setState({selectedTabTitle: selectedTab.get('title')}))
    }
    render() {
        return <div className="container">
            <header>
                <Navigation/>
            </header>

            {getComponentForTab(this.state.selectedTabTitle)}
        </div>
    }
}

export default App;