module.exports = function(app) {
  var self = this
    , moment = require('moment')
    , _ = require('lodash')
    , helpers = {
        weeks: require('../helpers/weeks')(app),
        days: require('../helpers/days')(app),
        routines: require('../helpers/routines')(app),
        workouts: require('../helpers/workouts')(app),
        entries: require('../helpers/entries')(app)
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
    
      //-- load days
      for (dayOfYear=1;dayOfYear<366;dayOfYear++) {
        var day = helpers.days.getDayObject(dayOfYear);
        data.days.push(day);
      }
      
      //-- load routines
      var routinesToLoad = helpers.routines.determineRoutinesToLoad(data.days);
      data.routines = helpers.routines.find(routinesToLoad);
      
      //-- load workouts
      var workoutsToLoad = _.chain(data.routines).flatten("workouts").uniq().value();
      data.workouts = helpers.workouts.find(workoutsToLoad);
      
      //-- load entries
      var entriesToLoad = _.chain(data.workouts).flatten("entry").uniq().value();
      data.entries = helpers.entries.find(entriesToLoad);
      
      res.send(data);
    },
    show: function(req,res,next) {
      var dayOfYear = req.params.dayOfYear
        , data = {
          day: null,
          routines: [],
          workouts: [],
          entries: [],
          sets: []
        };
      
      data.day = helpers.days.getDayObject(dayOfYear);
      
      res.send(data);
    }
  }
}