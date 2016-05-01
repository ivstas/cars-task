import Backbone from 'backbone';
import Car from '../models/car';

export default Backbone.Collection.extend({
    model: Car,

    byBrand(brand) {
        //todo: lower case
        return this.where({brand});
    },
    favourite() {
        return this.where({isFavourite: true});
    },
    getFavouriteCarCount() {
        return this.favourite().length;
    }
})