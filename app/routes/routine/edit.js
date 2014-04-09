export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    var title = model.get('name');
    this.controllerFor('header').set('title', title);
  },
  
  model: function(params) {
    return this.modelFor('routine');
  },
  
  actions: {
    cancel: function() {
      var model = this.controller.get('model');
      if (model) {
        this.transitionTo('routine', model);
      } else {
        this.transitionTo('routines');
      }
    }
  }
  
});
