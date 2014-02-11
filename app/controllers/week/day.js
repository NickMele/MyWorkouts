export default Ember.ObjectController.extend({
  
  detailedLogging: false,
  
  actions: {
    toggleDetailedLogging: function() {
      this.set('detailedLogging', !this.get('detailedLogging'));
    }
  }
  
});
