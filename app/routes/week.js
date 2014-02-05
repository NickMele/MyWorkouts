export default Ember.Route.extend({
  
  setupController: function(controller, model) {
    this._super(controller,model);
    
    var title = 'Week of ',
        formattedDate = moment(model.get('startDate')).format('M/D');
    this.controllerFor('application').set('title', title + formattedDate)
  },
  
	model: function(params) {
    console.log(params.start_date)
    return this.store.find('week', params.start_date);
	}
});
