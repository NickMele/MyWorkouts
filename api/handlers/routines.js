module.exports = function(app) {
  var self = this
    , _ = require('lodash')
    , helpers = {
        routines: require('../helpers/routines')(app),
        workouts: require('../helpers/workouts')(app),
        entries: require('../helpers/entries')(app)
      };
  
  return {
    index: function(req,res,next) {
      
      var data = {
        routines: [],
        workouts: [],
        entries: [],
        sets: []
      };
      
      //-- load routines
      data.routines = helpers.routines.find();
      
      //-- load workouts
      var workoutsToLoad = helpers.workouts.determineWorkoutsToLoad(data.routines);
      data.workouts = helpers.workouts.find(workoutsToLoad);
      
      //-- load entries
      var entriesToLoad = helpers.entries.determineEntriesToLoad(data.workouts);
      data.entries = helpers.entries.find(entriesToLoad);
    
      res.send(data);
    }
  }
}