export default Ember.Route.extend({
  setupController: function(controller, model) {
    this._super(controller,model);
    this.controllerFor('header').set('title', 'workout');
  },
  
  model: function(params) {
      return this.modelFor('workout');
  }
});
