export default Em.ObjectController.extend({
  
  title: 'My Workouts',
  currentWeek: function() {
    return moment().isoWeek();
  }.property()
  
});