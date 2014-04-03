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
    loadDays: function(req,res,data) {
      return function(callback) {
        for (dayOfYear=1;dayOfYear<366;dayOfYear++) {
          var day = getDayObject(dayOfYear);
          data.days.push(day);
        }
        callback(null);
      }
    },
    sideloadDays: function(req,res,data) {
      return function(callback) {
        if (data.weeks || data.week) {
          var weeks = data.weeks || [data.week];
          _.each(weeks, function(week) {
            for (dayOfWeek=0;dayOfWeek<7;dayOfWeek++) {
              var dayOfYear = week.days[dayOfWeek]
                , year = moment(week.startDate).add(dayOfWeek,'day').year()
                , day = getDayObject(dayOfYear,year);
              data.days.push(day);
            }
          });
          callback(null);  
        } else {
          callback("could not find weeks in app.data");
        }
      }
    }
  }
};