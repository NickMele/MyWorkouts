module.exports = function(app) {
  
  var weeks = require('./handlers/weeks')(app);
  
  app.namespace('/api', function() {
    app.get('/weeks', weeks.index);
  });
};