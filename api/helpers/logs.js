module.exports = function(app) {
  
  var _ = require('lodash')
    , Log = require('../models/log').Log;
    
  var determineLogsToLoad = function(days) {
    return _.chain(days).uniq("_id").without(undefined).value();
  };
  
  var mapLogsToDays = function(logs,days) {
    //-- loop through each log that was loaded
    _.forEach(logs, function(log) {
      var day = _.find(days, { '_id': log.day });
      if (day) {
        day.log = log._id;
      }
    });
  };
  
  return {
    sideloadLogs: function(req,res,data) {
      return function(callback) {
        if (data.days) {
          var logsToLoad = determineLogsToLoad(data.days);
          Log.find({
            'day': {
              $in: logsToLoad
            }
          }, function(error, logs) {
            if (error) {
              callback(error);
            } else {
              data.logs = logs;
              mapLogsToDays(data.logs,data.days);
              callback(null);
            }
          }); 
        } else {
          callback("could not find days in data");
        }
      }
    }
  }
};