module.exports = function(app) {
  var moment = require('moment')
    , async = require('async')
    , helpers = {
        days: require('../helpers/days')(app)
      };
  
  var getWeekObject = function(weekOfYear) {
    return {
      "_id": weekOfYear,
      "startDate": moment().week(weekOfYear).weekday(0).toDate(),
      "endDate": moment().week(weekOfYear).weekday(6).toDate(),
      "days": []
    };
  };
  
  return {
    getWeekObject: getWeekObject,
    loadWeeks: function(callback) {
      for (weekOfYear=1;weekOfYear<53;weekOfYear++) {
        var week = getWeekObject(weekOfYear);
        if (!app.data.weeks) {
          app.data.weeks = [];
        }
        app.data.weeks.push(week);
      }
      callback(null);
    },
    loadWeek: function(callback) {
      if (app.locals.weekOfYear) {
        app.data.week = getWeekObject(app.locals.weekOfYear);
        callback(null);
      } else {
        callback("could not find week of year in app.locals");
      }
    }
  }
};