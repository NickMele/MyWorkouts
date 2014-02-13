export default Ember.ObjectController.extend({
  // needs: ['autocomplete'],
  
  actions: {
    addWorkout: function(workout) {
      var workouts = this.get('workouts');
      if (workouts.contains(workout)) {
        return;
      }
      workouts.pushObject(workout);
    },
    search: function(term, context) {
      var workouts = this.store.find('workout', { name: term });
      workouts.then(function(workouts) {
        context.set('content', workouts);
      });      
    }
  }
});
