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
       selectedTab.save({title: 'cars'})
    },
    favourite: function() {
        selectedTab.save({title: 'favourite'})
    },
    statistics: function () {
        selectedTab.save({title: 'statistics'})
    }
});

export default new Routes();

