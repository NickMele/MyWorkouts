module.exports = function(app) {
  var moment = require('moment')
    , _ = require('lodash')
    , async = require('async')
    , helpers = {
        weeks: require('../helpers/weeks')(app),
        days: require('../helpers/days')(app),
        routines: require('../helpers/routines')(app),
        workouts: require('../helpers/workouts')(app),
        logs: require('../helpers/logs')(app),
        entries: require('../helpers/entries')(app),
        sets: require('../helpers/sets')(app)
      };
  
  return {
    index: function(req,res,next) {
      var data = {
        workouts: []
      };
      
      async.waterfall([
        helpers.workouts.loadWorkouts(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    },
    show: function(req,res,next) {
      app.locals = {
        workout_id: req.params.workout_id
      };
      var data = {
        workout: null
      };
      
      async.waterfall([
        helpers.workouts.loadWorkout(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    },
    create: function(req,res,next) {
      var data = {
        workout: null
      }
      
      async.waterfall([
        helpers.workouts.createWorkout(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    },
    update: function(req,res,next) {
      var data = {
        workout: null
      }
      
      async.waterfall([
        helpers.workouts.updateWorkout(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    }
  }
}