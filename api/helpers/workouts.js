module.exports = function(app) {
  
  var _ = require('lodash')
    , workouts = [
        {
          "id": 1,
          "name": "Workout 1",
          "entry": 1
        },
        {
          "id": 2,
          "name": "Workout 2",
          "entry": 2
        }
      ];
  
  return {
    determineWorkoutsToLoad: function(routines) {
      return _.chain(routines).flatten("workouts").uniq().value();
    },
    find: function(ids) {
      if (_.isArray(ids)) {
        return _.filter(workouts, function(workout) {
          return _.contains(ids, workout.id);
        });
      } else {
        return workouts;
      }
    }
  }
};