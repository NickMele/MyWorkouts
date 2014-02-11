export default Ember.ObjectController.extend({
  
  detailedLogging: false,
  
  actions: {
    toggleDetailedLogging: function() {
      this.set('detailedLogging', !this.get('detailedLogging'));
    },
    save: function(status) {
      console.log(status);
      var day = this.get('model'),
          routines = day.get('routines');
      day.set('status', status);
      routines.invoke('save');
      routines.forEach(function(routine) {
        var workouts = routine.get('workouts');
        workouts.forEach(function(workout) {
          var entry = workout.get('entry'),
              sets = entry.get('sets');
          entry.save().then(function() {
            sets.forEach(function(set) {
              set.save();
            });
          })
        })
      });
      day.save();
    }
  }
  
});
