import Backbone from 'backbone';
import Car from '../models/car';

export default Backbone.Collection.extend({
    model: Car,

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