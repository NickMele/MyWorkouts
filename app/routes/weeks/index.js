export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    var title = 'Weeks';
    this.controllerFor('header').set('title', title);
  },
  
  model: function() {
    console.log('getting weeks');
    return this.store.find('week');
  }
  
});
