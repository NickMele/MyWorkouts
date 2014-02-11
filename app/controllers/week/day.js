export default Ember.ObjectController.extend({
  
  detailedLogging: false,
  
  actions: {
    save: function(status) {
      console.log(status);
      var day = this.get('model'),
          routines = day.get('routines');
      day.set('status', status);
      routines.forEach(function(routine) {
        var workouts = routine.get('workouts');
        workouts.forEach(function(workout) {
          var entry = workout.get('entry'),
              sets = entry.get('sets');
          // sets.forEach(function(set) {
          //   console.log('saving set: ' + set.get('set_number'));
          //   set.save();
          // });
          console.log('saving sets');
          sets.save().then(function() {
            console.log('saving entry');
            entry.save();
          });
        })
      });
      console.log('saving routine');
      routines.save();
      console.log('saving day');
      day.save();
    }
  }
  
});
