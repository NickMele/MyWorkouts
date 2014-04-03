module.exports = function(app) {
  
  var _ = require('lodash')
    , Entry = require('../models/entry').Entry;
    
  var determineEntriesToLoad = function(logs) {
    return _.chain(logs).flatten("entries").uniq().without(undefined).value();
  };
  
  return {
    sideloadEntries: function(req,res,data) {
      return function(callback) {
        if (data.logs) {
          var entriesToLoad = determineEntriesToLoad(data.logs);
          Entry.find({
            '_id': {
              $in: entriesToLoad
            }
          }, function(error, entries) {
            if (error) {
              callback(error);
            } else {
              data.entries = entries;
              callback(null);
            }
          }); 
        } else {
          callback("could not find logs in data");
        }
      }
    }
  }
};