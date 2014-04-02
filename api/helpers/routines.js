module.exports = function(app) {
  
  var _ = require('lodash')
    , Routine = require('../models/routine').Routine;
  
  var mapRoutinesToDays = function() {
    app.locals.daysRoutinesMap = {};
    //-- loop through each routine that was loaded
    _.forEach(app.data.routines, function(routine) {
      //-- now loop through the days and push the routine id to the day object
      _.forEach(routine.days, function(day) {
        if (!_.isArray(app.locals.daysRoutinesMap[day])) {
          app.locals.daysRoutinesMap[day] = [];
        }
        //-- push routine id to routines map
        app.locals.daysRoutinesMap[day].push(routine._id);
      })
    });
  };
  
  return {
    sideloadRoutines: function(callback) {
      if (app.data.days) {
        var daysToLoad = _.chain(app.data.days).pluck('dayOfWeek').uniq().value();
        Routine.find({
          'days': {
            $in: daysToLoad
          }
        }, function(error, routines) {
          if (error) {
            callback(error);
          } else {
            app.data.routines = routines;
            mapRoutinesToDays();
            _.each(app.data.days,function(day) {
              day.routines = app.locals.daysRoutinesMap[day.dayOfWeek] || null;
            });
            callback(null);
          }
        });
      } else {
        callback("could not find days in app.data");
      }
    }
  }
};