module.exports = function(app) {
  
  var _ = require('lodash')
    , Workout = require('../models/workout').Workout;
      
  var determineWorkoutsToLoad = function(routines) {
    return _.chain(routines).flatten("workouts").uniq().without(undefined).value();
  };
  
  return {
    sideloadWorkouts: function(callback) {
      var workoutsToLoad = determineWorkoutsToLoad(app.data.routines);
      Workout.find({
        '_id': {
          $in: workoutsToLoad
        }
      }, function(error, workouts) {
        if (error) {
          callback(error);
        } else {
          app.data.workouts = workouts;
          callback(null);
        }
      });
    }
  }
};