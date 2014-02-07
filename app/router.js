var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
	this.resource('styles');

  // go to week with the following start date
  this.resource('weeks', function() {
    this.resource('week', { path: '/:week_id' }, function() {
      // go to a specific day
      this.route('day', { path: '/day/:day_id' });
    });
  });
    
  // // go to a specific day
  // this.resource('day', { path: '/day/:date' });
  
  // go to a specific workout
  this.resource('workout', { path: '/workout/:workout_id' });
  
  this.resource('routines', function() {
    this.route('create');
    this.route('routine', { path: '/:routine_id' });
  });
});

export default Router;
