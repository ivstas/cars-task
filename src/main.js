import $ from 'jquery'
import 'underscore';
import Backbone from 'backbone';

import React from 'react';
import { render } from 'react-dom';

import 'normalize.css';
import './styles/global.less';

import './router';
import App from './containers/app';


Backbone.history.start({pushState: true});

$(function() {
    render(<App/>, document.querySelector('#app'))
});
