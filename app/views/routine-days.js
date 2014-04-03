export default Ember.CollectionView.extend({
  tagName: 'div',
  classNames: ['day-selector'],
  content: [0, 1, 2, 3, 4, 5, 6],
  itemViewClass: Ember.View.extend({
    tagName: 'button',
    classNames: ['button button-blue'],
    classNameBindings: ['selected'],
    template: Ember.Handlebars.compile('{{view.weekday}}'),
    
    selected: false,
    
    toggleSelected: function() {
      var days = this.get('controller.days'),
          day = this.get('content');
      if (!days) {
        this.set('selected', false);
      }
      this.set('selected', days.contains(day));
    }.observes('controller.days.@each').on('init'),
    
    weekday: function() {
        var day = this.get('content');
        return moment().weekday(day).format('dd');
    }.property(),

    click: function() {
      var day = this.get('content'),
          selected = this.get('selected');
    
      this.get('controller').send('toggleDay', day, selected);
      return false;
    }

  })
});
