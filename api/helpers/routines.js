module.exports = function(app) {
  
  var _ = require('lodash')
    , Routine = require('../models/routine').Routine;
  
  var mapRoutinesToDays = function(days,routines) {
    var daysRoutinesMap = {};
    //-- loop through each routine that was loaded
    _.forEach(routines, function(routine) {
      //-- now loop through the days and push the routine id to the day object
      _.forEach(routine.days, function(day) {
        if (!_.isArray(daysRoutinesMap[day])) {
          daysRoutinesMap[day] = [];
        }
        //-- push routine id to routines map
        daysRoutinesMap[day].push(routine._id);
      })
    });
    return daysRoutinesMap;
  };
  
  return {
    loadRoutine: function(req,res,data) {
      return function(callback) {
        if (req.params.routine_id) {
          Routine.findById(req.params.routine_id, function(error, routine) {
            if (error) {
              callback(error);
            } else {
              data.routine = routine;
              callback(null);
            }
          });
        } else {
          callback("no routine provided");
        }
      }
    },
    loadRoutines: function(req,res,data) {
      return function(callback) {
        Routine.find({}, function(error, routines) {
          if (error) {
            callback(error);
          } else {
            data.routines = routines;
            callback(null);
          }
        });
      }
    },
    sideloadRoutines: function(req,res,data) {
      return function(callback) {
        if (data.days) {
          var daysToLoad = _.chain(data.days).pluck('dayOfWeek').uniq().value();
          Routine.find({
            'days': {
              $in: daysToLoad
            }
          }, function(error, routines) {
            if (error) {
              callback(error);
            } else {
              data.routines = routines;
              var daysRoutinesMap = mapRoutinesToDays(data.routines);
              _.each(data.days,function(day) {
                day.routines = daysRoutinesMap[day.dayOfWeek] || null;
              });
              callback(null);
            }
          });
        } else {
          callback("could not find days in app.data");
        }
      }
    },
    createRoutine: function(req,res,data) {
      return function(callback) {
        if (req.body.routine) {
          var routine = req.body.routine;
          console.info('Adding routine: ' + JSON.stringify(routine));
          
          Routine.create(routine, function(error, routine) {
            if(error) {
              callback(error);
            } else {
              data.routine = routine;
              callback(null)
            }
          }); 
        } else {
          callback("no routine provided to create");
        }
      }
    },
    updateRoutine: function(req,res,data) {
      return function(callback) {
        if (req.params.routine_id && req.body.routine) {
          var routine_id = req.params.routine_id
            , routine = req.body.routine;
          
          console.info('Updating routine ('+routine_id+'): ' + JSON.stringify(routine));
          
          Routine.findByIdAndUpdate(routine_id, routine, function(error, routine) {
            if(error) {
              callback(error);
            } else {
              data.routine = routine;
              callback(null)
            }
          }); 
        } else {
          callback("no routine provided to update");
        }
      }
    }
  }
};