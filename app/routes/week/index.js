export default Ember.Route.extend({
  
  // setupController: function(controller, model) {
  //   this._super(controller,model);
  //   var title = 'Week of ',
  //       formattedDate = moment(model.get('startDate')).format('M/D');
  //   this.controllerFor('header').set('title', title + formattedDate);
  // },
  
	model: function(params) {
    // return this.modelFor('week');
    return this.store.find('week', params.week_id);
	}
});
