

let SelectedTab = Backbone.Model.extend({
    defaults: {title: null}
});
export const selectedTab = new SelectedTab();

export default {
    selectedTab
}