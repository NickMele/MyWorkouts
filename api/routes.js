module.exports = function(app) {
  
  var weeks = require('./handlers/weeks')(app)
    , days = require('./handlers/days')(app)
    , routines = require('./handlers/routines')(app)
    , workouts = require('./handlers/workouts')(app);
  
  app.namespace('/api', function() {
    //-- weeks
    app.get('/weeks', weeks.index);
    app.get('/weeks/:weekOfYear', weeks.show);
    
    //-- days
    app.get('/days', days.index);
    app.get('/days/:dayOfYear', days.show);
    
    //-- routines
    app.get('/routines', routines.index);
    app.get('/routines/:routine_id', routines.show);
    app.post('/routines', routines.create);
    app.put('/routines/:routine_id', routines.update);
    
    //-- workouts
    app.get('/workouts', workouts.index);
    app.get('/workouts/:workout_id', workouts.show);
    app.post('/workouts', workouts.create);
    app.put('/workouts/:workout_id', workouts.update);
  });
};