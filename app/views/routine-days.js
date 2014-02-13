export default Ember.CollectionView.extend({
  tagName: 'div',
  classNames: ['day-selector'],
  content: ['0', '1', '2', '3', '4', '5', '6'],
  itemViewClass: Ember.View.extend({
    tagName: 'button',
    classNames: ['button button-blue'],
    classNameBindings: ['selected'],
    template: Ember.Handlebars.compile('{{view.weekday}}'),
    
    selected: false,
    weekday: function() {
        var day = this.get('content');
        return moment().weekday(day).format('dd');
    }.property(),

    click: function() {
      this.set('selected', !this.get('selected'));
    }

  })
});
