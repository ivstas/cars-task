var Backbone = require('backbone');
import LocalStorage from 'backbone.localstorage';

export default Backbone.Model.extend({
    defaults: {
        title: null
    },
    localStorage: new LocalStorage('selectedBrand')
});