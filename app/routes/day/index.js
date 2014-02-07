export default Ember.Route.extend({
	
  setupController: function(controller, model) {
    this._super(controller, model);
    var todaysDate = new Date(),
        selectedDate = model.get('date'),
        title = null;
    if (moment(todaysDate).isSame(selectedDate, "day")) {
      title = "Today (" + moment(selectedDate).format('MMM Do') + ")";
    } else {
      title = moment(selectedDate).format('dddd MMM Do');
    }
    this.controllerFor('header').set('title', title);
  },
  
  model: function(params) {
		return this.modelFor('day');
	}
});
