module.exports = function(app) {
  var moment = require('moment')
    , async = require('async')
    , helpers = {
        weeks: require('../helpers/weeks')(app),
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
        weeks: [],
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
        helpers.weeks.loadWeeks
      ], function(error) {
        console.log(error);
        res.send(app.data);
      });
      
    },
    show: function(req,res,next) {
      var weekOfYear = req.params.weekOfYear;
        
      app.locals = {};
      app.data = {
        week: null,
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
        helpers.sets.sideloadSets
      ], function(error) {
        
        app.data.week = helpers.weeks.getWeekObject(weekOfYear);
        
        //-- load days of week
        app.data.week = helpers.days.loadDaysOfWeek(app.data.week);
        
        res.send(app.data);
      });
      
    }
  }
}