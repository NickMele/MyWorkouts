module.exports = function(app) {
  var self = this
    , moment = require('moment')
    , _ = require('lodash')
    , async = require('async')
    , helpers = {
        days: require('../helpers/days')(app),
        routines: require('../helpers/routines')(app),
        workouts: require('../helpers/workouts')(app),
        entries: require('../helpers/entries')(app),
        sets: require('../helpers/sets')(app)
      };
  
  return {
    index: function(req,res,next) {
      
      var data = {
        days: [],
        routines: [],
        workouts: [],
        entries: [],
        sets: []
      };
      
      async.waterfall([
        helpers.routines.sideloadRoutines(req,res,data),
        helpers.workouts.sideloadWorkouts(req,res,data),
        helpers.entries.sideloadEntries(req,res,data),
        helpers.sets.sideloadSets(req,res,data),
        helpers.days.loadDays(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    },
    show: function(req,res,next) {
      var dayOfYear = req.params.dayOfYear;
      
      var data = {
        day: null,
        routines: [],
        workouts: [],
        entries: [],
        sets: []
      };
      
      async.waterfall([
        helpers.routines.sideloadRoutines(req,res,data),
        helpers.workouts.sideloadWorkouts(req,res,data),
        helpers.entries.sideloadEntries(req,res,data),
        helpers.sets.sideloadSets(req,res,data)
      ], function(error) {
        
        data.day = helpers.days.getDayObject(req,res,data)(dayOfYear);
        
        res.send(data);
      });
      
    }
  }
}