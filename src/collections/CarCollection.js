import Backbone from 'backbone';
import Car from '../models/car';
import LocalStorage from 'backbone.localstorage';

export default Backbone.Collection.extend({
    model: Car,

    localStorage: new LocalStorage("cars"),

    byBrand(brand) {
        return this.filter(car => car.get('brand').toLowerCase() === brand.toLowerCase());
    },
    favourite() {
        return this.where({isFavourite: true});
    },
    getFavouriteCarCount() {
        return this.favourite().length;
    }
})