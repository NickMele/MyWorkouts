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
      
      app.locals = {};
      app.data = {
        days: [],
        routines: [],
        workouts: [],
        entries: [],
        sets: []
      };
      
      async.waterfall([
        helpers.routines.sideloadRoutines,
        helpers.workouts.sideloadWorkouts,
        helpers.entries.sideloadEntries,
        helpers.sets.sideloadSets,
        helpers.days.loadDays
      ], function(error) {
        console.log(error);
        res.send(app.data);
      });
      
    },
    show: function(req,res,next) {
      var dayOfYear = req.params.dayOfYear;
      
      app.locals = {};
      app.data = {
        day: null,
        routines: [],
        workouts: [],
        entries: [],
        sets: []
      };
      
      async.waterfall([
        helpers.routines.sideloadRoutines,
        helpers.workouts.sideloadWorkouts,
        helpers.entries.sideloadEntries,
        helpers.sets.sideloadSets
      ], function(error) {
        
        app.data.day = helpers.days.getDayObject(dayOfYear);
        
        res.send(app.data);
      });
      
    }
  }
}