var Backbone = require('backbone');

export default Backbone.Model.extend({
    defaults: {
        model: null,
        brand: null,
        isFavourite: false
    },

    setFavourite(isFavourite) {
        this.save({
            isFavourite
        })
    }
});