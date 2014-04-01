module.exports = function(app) {
  
  var _ = require('lodash')
    , Entry = require('../models/entry').Entry;
    
  var determineEntriesToLoad = function(workouts) {
    return _.chain(workouts).flatten("entry").uniq().without(undefined).value();
  };
  
  return {
    sideloadEntries: function(callback) {
      var entriesToLoad = determineEntriesToLoad(app.data.workouts);
      Entry.find({
        '_id': {
          $in: entriesToLoad
        }
      }, function(error, entries) {
        if (error) {
          callback(error);
        } else {
          app.data.entries = entries;
          callback(null);
        }
      });
    }
  }
};