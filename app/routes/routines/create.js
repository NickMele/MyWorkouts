export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    var title = 'New Routine';
    this.controllerFor('header').set('title', title);
  },
  
	model: function() {
    return this.store.createRecord('routine', {days: []});
	},
  
  renderTemplate: function() {
    this.render('routine.edit',{controller:'routines.create'})
  },
  
  actions: {
    cancel: function() {
      this.transitionTo('routines')
    },
    willTransition: function(transition) {
      var controller = this.controller
        , model = controller.get('model');
      
      model.destroyRecord();
      return true;
    }
  }
});
