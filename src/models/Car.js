var Backbone = require('backbone');

export default Backbone.Model.extend({
    defaults: {
        model: null,
        make: null,
        isFavourite: false
    },

    setFavourite(isFavourite) {
        this.save({
            isFavourite
        })
    }
});