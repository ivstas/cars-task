import Brand from '../models/Brand';

let SelectedTab = Backbone.Model.extend({
    defaults: {title: null}
});
export const selectedTab = new SelectedTab();
export const selectedBrand = new Brand();

export default {
    selectedTab,
    selectedBrand
}