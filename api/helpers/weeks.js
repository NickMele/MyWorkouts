module.exports = function(app) {
  var moment = require('moment')
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
        
        //-- load days of week
        week = helpers.days.loadDaysOfWeek(week);
        app.data.weeks.push(week);
      }
      callback(null);
    }
  }
};