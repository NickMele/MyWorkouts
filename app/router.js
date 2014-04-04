var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
	this.resource('styles');

  // go to week with the following start date
  this.resource('weeks', function() {
    this.resource('week', { path: '/:week_id' }, function() {
      // go to a specific day
      this.route('day', { path: '/:day_id' });
    });
  });
    
  // // go to a specific day
  // this.resource('day', { path: '/day/:date' });
  
  // go to a specific workout
  this.resource('workouts', function() {
    this.route('create');
    this.resource('workout', { path: '/:workout_id' }, function() {
      this.route('edit');
    });
  });
  
  this.resource('routines', function() {
    this.route('create');
    this.resource('routine', { path: '/:routine_id' }, function() {
      this.route('edit');
      //--nest
    });
  });
});

export default Router;
