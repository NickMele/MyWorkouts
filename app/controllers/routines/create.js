export default Ember.ObjectController.extend({
  needs: ['autocomplete'],
  
  actions: {
    addWorkout: function(value) {
      console.log(value);
    },
    search: function(term, context) {
      var results = [
        Ember.Object.create({name: term}),
        Ember.Object.create({name: 'Military Press'}),
        Ember.Object.create({name: 'Shoulder Press'}),
      ];
      context.set('content', results);
    }
  }
});
