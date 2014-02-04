var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
	this.route('styles');

	this.route('week');
  this.route('day', { path: '/day/:day_id' })
});

export default Router;
