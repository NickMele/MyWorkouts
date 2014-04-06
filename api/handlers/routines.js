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
        routines: [],
        workouts: []
      };
      
      async.waterfall([
        helpers.routines.loadRoutines(req,res,data),
        helpers.workouts.sideloadWorkouts(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    },
    show: function(req,res,next) {
      var data = {
        routine: null,
        workouts: []
      };
      
      async.waterfall([
        helpers.routines.loadRoutine(req,res,data),
        helpers.workouts.sideloadWorkouts(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    },
    create: function(req,res,next) {
      var data = {
        routine: null
      }
      
      async.waterfall([
        helpers.routines.createRoutine(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    },
    update: function(req,res,next) {
      var data = {
        routine: null
      }
      
      async.waterfall([
        helpers.routines.updateRoutine(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    },
    delete: function(req,res,next) {
      var data = {
        routine: null
      }
      
      async.waterfall([
        helpers.routines.deleteRoutine(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    }
  }
}