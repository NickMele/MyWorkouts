export default Ember.ObjectController.extend({
  actions: {
    delete: function() {
      var self = this
        , model = self.get('model');
      if (confirm('Are you sure you want to remove the routine "' + model.get('name') + '"?')) {
        Ember.run.next(this,function() {
          model.destroyRecord().then(function() {
            self.transitionToRoute('routines');
          });
        },1000)
      } else {
        return false;
      }
    }
  }
});
