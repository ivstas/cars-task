import SelectedBrand from '../models/SelectedBrand';
import LocalStorage from 'backbone.localstorage';

let SelectedTab = Backbone.Model.extend({
    defaults: {title: null}
});
export const selectedTab = new SelectedTab();
export const selectedBrand = new SelectedBrand();

export default {
    selectedTab,
    selectedBrand
}