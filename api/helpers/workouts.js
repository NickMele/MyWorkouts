module.exports = function(app) {
  
  var _ = require('lodash')
    , Workout = require('../models/workout').Workout;
      
  var determineWorkoutsToLoad = function(routines) {
    return _.chain(routines).flatten("workouts").uniq().without(undefined).value();
  };
  
  return {
    loadWorkout: function(req,res,data) {
      return function(callback) {
        if (req.params.workout_id) {
          Workout.findById(req.params.workout_id, function(error, workout) {
            if (error) {
              callback(error);
            } else {
              data.workout = workout;
              callback(null);
            }
          });
        } else {
          callback("no workout provided");
        }
      }
    },
    loadWorkouts: function(req,res,data) {
      return function(callback) {
        var conditions = {};
        if (req.query.ids) {
          conditions._id = { $in: req.query.ids }; 
        }
        if (req.query.name) {
          conditions.name = new RegExp(req.query.name,'i'); 
        }    
        Workout.find(conditions, function(error, workouts) {
          if (error) {
            callback(error);
          } else {
            data.workouts = workouts;
            callback(null);
          }
        });
      }
    },
    sideloadWorkouts: function(req,res,data) {
      return function(callback) {
        if (data.routines || data.routine) {
          var routines = data.routines || [data.routine]
            , workoutsToLoad = determineWorkoutsToLoad(routines);
          Workout.find({
            '_id': {
              $in: workoutsToLoad
            }
          }, function(error, workouts) {
            if (error) {
              callback(error);
            } else {
              data.workouts = workouts;
              callback(null);
            }
          }); 
        } else {
          callback("could not find routines in app.data");
        }
      }
    },
    createWorkout: function(req,res,data) {
      return function(callback) {
        if (req.body.workout) {
          var workout = req.body.workout;
          console.info('Adding workout: ' + JSON.stringify(workout));
          
          Workout.create(workout, function(error, workout) {
            if(error) {
              callback(error);
            } else {
              data.workout = workout;
              callback(null)
            }
          }); 
        } else {
          callback("no workout provided to create");
        }
      }
    },
    updateWorkout: function(req,res,data) {
      return function(callback) {
        if (req.params.workout_id && req.body.workout) {
          var workout_id = req.params.workout_id
            , workout = req.body.workout;
          
          console.info('Updating workout ('+workout_id+'): ' + JSON.stringify(workout));
          
          Workout.findByIdAndUpdate(workout_id, workout, function(error, workout) {
            if(error) {
              callback(error);
            } else {
              data.workout = workout;
              callback(null)
            }
          }); 
        } else {
          callback("no workout provided to update");
        }
      }
    }
  }
};