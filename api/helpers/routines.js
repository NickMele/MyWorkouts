module.exports = function(app) {
  
  var _ = require('lodash')
    , Routine = require('../models/routine').Routine;
  
  var mapDataToDays = function() {
    app.locals.daysRoutinesMap = {};
    app.locals.daysWorkoutsMap = {};
    //-- loop through each routine that was loaded
    _.forEach(app.data.routines, function(routine) {
      //-- now loop through the days and push the routine id to the day object
      _.forEach(routine.days, function(day) {
        if (!_.isArray(app.locals.daysRoutinesMap[day])) {
          app.locals.daysRoutinesMap[day] = [];
        }
        //-- push routine id to routines map
        app.locals.daysRoutinesMap[day].push(routine._id);
        if (!_.isArray(app.locals.daysWorkoutsMap[day])) {
          app.locals.daysWorkoutsMap[day] = [];
        }
        //-- push workouts to workouts map
        app.locals.daysWorkoutsMap[day] = _.union(app.locals.daysWorkoutsMap[day],routine.workouts);
      })
    });
  };
  
  return {
    sideloadRoutines: function(callback) {
      var daysToLoad = [0,1,2,3,4,5,6];
      Routine.find({
        'days': {
          $in: daysToLoad
        }
      }, function(error, routines) {
        if (error) {
          callback(error);
        } else {
          app.data.routines = routines;
          mapDataToDays();
          callback(null);
        }
      });
    }
  }
};