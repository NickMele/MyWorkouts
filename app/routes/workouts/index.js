export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    this.controllerFor('header').set('title', 'Workouts');
  },
  
  model: function() {
    return this.store.find('workout');
  }
  
});
