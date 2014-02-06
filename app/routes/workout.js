export default Ember.Route.extend({
  model: function(params) {
      return this.store.find('workout', params.workout_id);
  }
});
