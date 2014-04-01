module.exports = function(app) {
  var moment = require('moment')
    , helpers = {
        routines: require('../helpers/routines')(app)
      };
  
  var getDayObject = function(dayOfYear) {
    var dayOfWeek = moment().dayOfYear(dayOfYear).weekday();
    return {
      "_id": dayOfYear,
      "week": moment().dayOfYear(dayOfYear).week(),
      "date": moment().dayOfYear(dayOfYear).toDate(),
      "dayOfWeek": dayOfWeek,
      "totalRoutines": (app.locals.daysRoutinesMap[dayOfWeek]) ? app.locals.daysRoutinesMap[dayOfWeek].length : 0,
      "totalWorkouts": (app.locals.daysWorkoutsMap[dayOfWeek]) ? app.locals.daysWorkoutsMap[dayOfWeek].length : 0,
      "routines": app.locals.daysRoutinesMap[dayOfWeek] || null,
      "workouts": app.locals.daysWorkoutsMap[dayOfWeek] || null,
      "status": "completed"
    };
  };
      
  return {
    getDayObject: getDayObject,
    loadDays: function(callback) {
      for (dayOfYear=1;dayOfYear<366;dayOfYear++) {
        var day = getDayObject(dayOfYear);
        app.data.days.push(day);
      }
      callback(null);
    },
    loadDaysOfWeek: function(week) {
      for (dayOfWeek=0;dayOfWeek<7;dayOfWeek++) {
        var dayOfYear = moment().week(week._id).weekday(dayOfWeek).dayOfYear()
          , day = getDayObject(dayOfYear);
        app.data.days.push(day);
        week.days.push(day._id);
      }
      return week;
    }
  }
};