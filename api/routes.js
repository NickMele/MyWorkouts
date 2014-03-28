module.exports = function(app) {
  
  var weeks = require('./handlers/weeks')(app)
    , days = require('./handlers/days')(app)
    , routines = require('./handlers/routines')(app);
  
  app.namespace('/api', function() {
    //-- weeks
    app.get('/weeks', weeks.index);
    app.get('/weeks/:weekOfYear', weeks.show);
    
    //-- days
    app.get('/days', days.index);
    app.get('/days/:dayOfYear', days.show);
    
    //-- routines
    app.get('/routines', routines.index);
  });
};