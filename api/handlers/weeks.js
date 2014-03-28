module.exports = function(app) {
  var self = this
    , moment = require('moment')
    , helpers = {
        weeks: require('../helpers/weeks')(app),
        days: require('../helpers/days')(app)
      };
  
  return {
    index: function(req,res,next) {
      
      var data = {
        weeks: [],
        days: [],
        routines: [],
        workouts: [],
        entries: [],
        sets: []
      };
      
      //-- load weeks
      for (weekOfYear=1;weekOfYear<53;weekOfYear++) {
        var week = helpers.weeks.getWeekObject(weekOfYear);
        
        //-- load days
        for (dayOfWeek=0;dayOfWeek<7;dayOfWeek++) {
          var dayOfYear = moment().week(weekOfYear).weekday(dayOfWeek).dayOfYear()
            , day = helpers.days.getDayObject(dayOfYear);
          data.days.push(day);
          week.days.push(day.id);
        }
        data.weeks.push(week);
      }

      res.send(data);
    },
    show: function(req,res,next) {
      var weekOfYear = req.params.weekOfYear
        , data = {
          week: null,
          days: [],
          routines: [],
          workouts: [],
          entries: [],
          sets: []
        };
      
      var week = helpers.weeks.getWeekObject(weekOfYear);
        
      //-- load days
      for (dayOfWeek=0;dayOfWeek<7;dayOfWeek++) {
        var dayOfYear = moment().week(weekOfYear).weekday(dayOfWeek).dayOfYear()
          , day = helpers.days.getDayObject(dayOfYear);
        data.days.push(day);
        week.days.push(day.id);
      }
      data.week = week;
      
      res.send(data);
    }
  }
}