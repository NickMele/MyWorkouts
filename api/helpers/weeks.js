module.exports = function(app) {
  var moment = require('moment');
  return {
    getWeekObject: function(weekOfYear) {
      return {
        "id": weekOfYear,
        "startDate": moment().week(weekOfYear).weekday(0).toDate(),
        "endDate": moment().week(weekOfYear).weekday(6).toDate(),
        "days": []
      };
    }
  }
};