export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('day', params.day_id);
	}
});
