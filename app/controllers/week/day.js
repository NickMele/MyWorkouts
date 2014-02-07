export default Ember.ObjectController.extend({
  
  dateForUrl: function() {
    return moment(this.get('date')).format('MM-DD-YYYY');
  }.property('date')
  
});
