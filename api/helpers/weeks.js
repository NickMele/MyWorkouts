module.exports = function(app) {
  var moment = require('moment')
    , async = require('async')
    , helpers = {
        days: require('../helpers/days')(app)
      };
  
  var getWeekObject = function(weekOfYear) {
    var startDate = moment().week(weekOfYear).weekday(0).toDate()
      , endDate = moment().week(weekOfYear).weekday(6).toDate()
      , days = [];
    
    for (i=0;i<7;i++) {
      days.push(moment().week(weekOfYear).weekday(i).dayOfYear());
    }  
    
    return {
      "_id": weekOfYear,
      "startDate": startDate,
      "endDate": endDate,
      "days": days
    };
  };
  
  return {
    getWeekObject: getWeekObject,
    loadWeeks: function(req,res,data) {
      return function(callback) {
        for (weekOfYear=1;weekOfYear<53;weekOfYear++) {
          var week = getWeekObject(weekOfYear);
          if (!data.weeks) {
            data.weeks = [];
          }
          data.weeks.push(week);
        }
        callback(null);
      }
    },
    loadWeek: function(req,res,data) {
      return function(callback) {
        if (req.params.weekOfYear) {
          data.week = getWeekObject(req.params.weekOfYear);
          callback(null);
        } else {
          callback("could not find week of year in locals");
        }
      }
    }
  }
};