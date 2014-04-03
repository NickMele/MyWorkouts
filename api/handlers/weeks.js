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
        weeks: [],
        days: [],
        routines: [],
        workouts: [],
        logs: [],
        entries: [],
        sets: []
      };
      
      async.waterfall([
        helpers.weeks.loadWeeks(req,res,data),
        helpers.days.sideloadDays(req,res,data),
        helpers.routines.sideloadRoutines(req,res,data),
        helpers.workouts.sideloadWorkouts(req,res,data),
        helpers.logs.sideloadLogs(req,res,data),
        helpers.entries.sideloadEntries(req,res,data),
        helpers.sets.sideloadSets(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    },
    show: function(req,res,next) {
      var data = {
        week: null,
        days: [],
        routines: [],
        workouts: [],
        entries: [],
        sets: []
      };
      
      async.waterfall([
        helpers.weeks.loadWeek(req,res,data),
        helpers.days.sideloadDays(req,res,data),
        helpers.routines.sideloadRoutines(req,res,data),
        helpers.workouts.sideloadWorkouts(req,res,data),
        helpers.logs.sideloadLogs(req,res,data),
        helpers.entries.sideloadEntries(req,res,data),
        helpers.sets.sideloadSets(req,res,data)
      ], function(error) {
        res.send(data);
      });
      
    }
  }
}