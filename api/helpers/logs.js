module.exports = function(app) {
  
  var _ = require('lodash')
    , Log = require('../models/log').Log;
    
  var determineLogsToLoad = function(days) {
    return _.chain(days).uniq("_id").without(undefined).value();
  };
  
  var mapLogsToDays = function() {
    //-- loop through each log that was loaded
    _.forEach(app.data.logs, function(log) {
      var day = _.find(app.data.days, { '_id': log.day });
      if (day) {
        day.log = log._id;
      }
    });
  };
  
  return {
    sideloadLogs: function(callback) {
      if (app.data.days) {
        var logsToLoad = determineLogsToLoad(app.data.days);
        Log.find({
          'day': {
            $in: logsToLoad
          }
        }, function(error, logs) {
          if (error) {
            callback(error);
          } else {
            app.data.logs = logs;
            mapLogsToDays();
            callback(null);
          }
        }); 
      } else {
        callback("could not find days in app.data");
      }
    }
  }
};