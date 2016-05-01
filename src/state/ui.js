import Brand from '../models/Brand';
import LocalStorage from 'backbone.localstorage';

let SelectedTab = Backbone.Model.extend({
    defaults: {title: null},
    localStorage: new LocalStorage('selectedTab')
});
export const selectedTab = new SelectedTab();
export const selectedBrand = new Brand({
    localStorage: new LocalStorage('selectedBrand')
});

export default {
    selectedTab,
    selectedBrand
}