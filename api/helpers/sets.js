module.exports = function(app) {
  
  var _ = require('lodash')
    , Set = require('../models/set').Set;
    
  var determineSetsToLoad = function(entries) {
    return _.chain(entries).flatten("sets").uniq().without(undefined).value();
  };
  
  return {
    sideloadSets: function(callback) {
      if (app.data.entries) {
        var setsToLoad = determineSetsToLoad(app.data.entries);
        Set.find({
          '_id': {
            $in: setsToLoad
          }
        }, function(error, sets) {
          if (error) {
            callback(error);
          } else {
            app.data.sets = sets;
            callback(null);
          }
        });
      } else {
        callback("could not find entries in app.data");
      }
    }
  }
};