import Backbone from 'backbone';
import Car from '../models/car';
import LocalStorage from 'backbone.localstorage';

export default Backbone.Collection.extend({
    model: Car,
    localStorage: new LocalStorage('favouriteCars')
})