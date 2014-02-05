export default Ember.Route.extend({

	actions: {
		toggleMenu: function(template, model) {
			var menuOpen = this.controller.get('menuOpen');
			this.controller.set('menuOpen', !menuOpen);
		}
	},
  
  activate: function() {
    this.controllerFor('application').set('title', 'My Workouts')
  }

});
