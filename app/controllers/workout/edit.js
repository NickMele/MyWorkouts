export default Ember.ObjectController.extend({
  
  actions: {
    saveWorkout: function() {
      var self = this
        , workout = this.get('model');

      workout.save().then(function() {
        self.store.find('week')
        self.transitionToRoute('workout', workout);
      });
    },
    addSet: function(entry) {
      var sets = entry.get('sets'),
          lastSet = sets.get('lastObject'),
          newSet = this.store.createRecord('set');
          
      if (lastSet) {
        lastSet = lastSet.toJSON();
        lastSet.set_number++; 
        newSet.setProperties(lastSet);
      } else {
        newSet.set('set_number', 1);
      }
      
      sets.addObject(newSet);
    }
  }
  
});