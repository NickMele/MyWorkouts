export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    var title = model.get('name');
    this.controllerFor('header').set('title', title);
  },
  
  model: function(params) {
    return this.modelFor('routine');
  },
  
  actions: {
    willTransition: function(transition) {
      var controller = this.controller
        , model = controller.get('model');
      model.reload().then(function() {
        return true;
      });
    }
  }
  
});
