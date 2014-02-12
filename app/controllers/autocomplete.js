export default Ember.ObjectController.extend({
  actions: {
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