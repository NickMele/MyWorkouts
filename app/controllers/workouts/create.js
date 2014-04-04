export default Ember.ObjectController.extend({
  actions: {
    saveWorkout: function() {
      var self = this
        , workout = this.get('model');

      workout.save().then(function() {
        self.store.find('week')
        self.transitionToRoute('workout', workout);
      });
    }
  }
});
