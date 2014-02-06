export default Ember.Route.extend({
	
  setupController: function(controller, model) {
    this._super(controller, model);
    var title = moment(model.get('startDate')).format('dddd MMM Do');
    this.controllerFor('header').set('title', title);
  },
  
  model: function(params) {
		return this.store.find('day', params.date);
	}
});
