export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    var title = 'New Routine';
    this.controllerFor('header').set('title', title);
  },
  
	model: function() {
    return this.store.createRecord('routine', {days: []});
	},
  
  actions: {
    willTransition: function(transition) {
      var model = this.controller.get('model');
      if (!model.get('isSaved')) {
        if (confirm('You have not saved the new record, are you sure you want to leave?')) {
          model.destroyRecord();
        } else {
          transition.abort();
        }
      }
    }
  }
});
