export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    var title = 'New Workout';
    this.controllerFor('header').set('title', title);
  },
  
	model: function() {
    return this.store.createRecord('workout');
	},
  
  renderTemplate: function() {
    this.render('workout.edit',{controller:'workouts.create'})
  }
});
