export default Ember.Route.extend({
	model: function(params) {
    console.log(params.start_date)
    return this.store.find('week', params.start_date);
	}
});
