export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    var title = 'Routines';
    this.controllerFor('header').set('title', title);
  },
  
	model: function() {
    return this.store.find('routine');
	}
});
