module.exports = function(app) {
  
  var _ = require('lodash')
    , routines = [
      {
        "id": 1,
        "name": "Test Routine",
        "workouts": [1]
      },
      {
        "id": 2,
        "name": "Tester Routine",
        "workouts": [1,2]
      }
    ];
  
  return {
    determineRoutinesToLoad: function(days) {
      return _.chain(days).flatten("routines").uniq().value();
    },
    find: function(ids) {
      if (_.isArray(ids)) {
        return _.filter(routines, function(routine) {
          return _.contains(ids, routine.id);
        });
      } else {
        return routines;
      }
    }
  }
};