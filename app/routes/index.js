export default Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  },
  activate: function() {
    this.controllerFor('application').set('title', 'My Workouts')
  }
});
