module.exports = function(app) {
  var moment = require('moment')
    , _ = require('lodash')
    , async = require('async')
    , helpers = {
        routines: require('../helpers/routines')(app)
      };
  
  var getDayObject = function(dayOfYear, year) {
    if (!year) {
      year = moment().year();
    }
    var dayOfWeek = moment().year(year).dayOfYear(dayOfYear).weekday();
    return {
      "_id": dayOfYear,
      "date": moment().year(year).dayOfYear(dayOfYear).toDate(),
      "dayOfWeek": dayOfWeek,
      "routines": []
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
    sideloadDays: function(callback) {
      if (app.data.weeks || app.data.week) {
        var weeks = app.data.weeks || [app.data.week];
        _.each(weeks, function(week) {
          for (dayOfWeek=0;dayOfWeek<7;dayOfWeek++) {
            var dayOfYear = moment(week.startDate).week(week._id).weekday(dayOfWeek).dayOfYear()
              , year = moment(week.startDate).add(dayOfWeek,'day').year()
              , day = getDayObject(dayOfYear,year);
            app.data.days.push(day);
            week.days.push(day._id);
          }
        });
        callback(null);  
      } else {
        callback("could not find weeks in app.data");
      }
    }
  }
};