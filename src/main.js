import Backbone from 'backbone';
import React from 'react';
import { render } from 'react-dom';

//import AppView from './views/appView';
import $ from 'jquery'

import './router';
import App from './containers/app';


Backbone.history.start({pushState: true});

$(function() {
    render(<App/>, document.querySelector('#app'))
});
