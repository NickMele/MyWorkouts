var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
	this.route('styles');

  // go to week with the following start date
	this.route('week', { path: '/week/:start_date' });
    
  // go to a specific day
  this.route('day', { path: '/day/:date' });
});

export default Router;
