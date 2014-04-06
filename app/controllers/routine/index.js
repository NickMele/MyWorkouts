export default Ember.ObjectController.extend({
  actions: {
    delete: function(routine) {
      if (confirm('Are you sure you want to remove the routine "' + routine.get('name') + '"?')) {
        routine.destroyRecord(); 
      }
    }
  }
});
