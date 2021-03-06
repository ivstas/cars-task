'use strict';

import Backbone from 'backbone';

import { selectedTab } from './state/ui';

export const pages = {
    cars: 'cars',
    favourite: 'favourite',
    statistics: 'statistics'
};

const Routes =  Backbone.Router.extend({
    routes: pages,
    cars: function() {
       selectedTab.set({title: 'cars'})
    },
    favourite: function() {
        selectedTab.set({title: 'favourite'})
    },
    statistics: function () {
        selectedTab.set({title: 'statistics'})
    }
});

export default new Routes();

