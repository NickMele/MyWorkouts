export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    var title = 'New Routine';
    this.controllerFor('header').set('title', title);
  },
  
	model: function() {
    return this.store.createRecord('routine', {days: []});
	}
});
