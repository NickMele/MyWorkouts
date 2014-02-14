export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    var title = 'Week of ',
        formattedDate = moment(model.get('startDate')).format('MMM Do');
    this.controllerFor('header').set('title', title + formattedDate);
  },
  
	model: function(params) {
    return this.modelFor('week');
	}
});
