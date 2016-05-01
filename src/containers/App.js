import React, {Component} from 'react';

import { cars as carsState } from '../state'
import CarByMake from './CarByMake';
import BrandBar from './BrandBar';
import Header from './Header';

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
                <CarByMake/>
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
        return <div>
            <Header/>
            {getComponentForTab(this.state.selectedTabTitle)}
            <footer>footer</footer>
        </div>
    }
}

export default App;