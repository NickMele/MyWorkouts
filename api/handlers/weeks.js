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
      
      app.locals = {};
      app.data = {
        weeks: [],
        days: [],
        routines: [],
        workouts: [],
        logs: [],
        entries: [],
        sets: []
      };
      
      async.waterfall([
        helpers.weeks.loadWeeks,
        helpers.days.sideloadDays,
        helpers.routines.sideloadRoutines,
        helpers.workouts.sideloadWorkouts,
        helpers.logs.sideloadLogs,
        helpers.entries.sideloadEntries,
        helpers.sets.sideloadSets
      ], function(error) {
        res.send(app.data);
      });
      
    },
    show: function(req,res,next) {
      app.locals = {
        weekOfYear: req.params.weekOfYear
      };
      app.data = {
        week: null,
        days: [],
        routines: [],
        workouts: [],
        entries: [],
        sets: []
      };
      
      async.waterfall([
        helpers.weeks.loadWeek,
        helpers.days.sideloadDays,
        helpers.routines.sideloadRoutines,
        helpers.workouts.sideloadWorkouts,
        helpers.logs.sideloadLogs,
        helpers.entries.sideloadEntries,
        helpers.sets.sideloadSets
      ], function(error) {
        res.send(app.data);
      });
      
    }
  }
}