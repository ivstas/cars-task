import Backbone from 'backbone';
import Car from '../models/car';

export default Backbone.Collection.extend({
    model: Car,

    byBrand(make) {
        return this.where({make})
    },
    favourite() {
        return this.where({isFavourite: true})
    }
})