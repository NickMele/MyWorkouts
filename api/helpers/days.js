module.exports = function(app) {
  var moment = require('moment');
  return {
    getDayObject: function(dayOfYear) {
      return {
        "id": dayOfYear,
        "week": moment().dayOfYear(dayOfYear).week(),
        "date": moment().dayOfYear(dayOfYear).toDate(),
        "dayOfWeek": moment().dayOfYear(dayOfYear).weekday(),
        "totalRoutines": 0,
        "totalWorkouts": 0,
        "routines": [1,2],
        "workouts": [],
        "status": "completed"
      };
    }
  }
};