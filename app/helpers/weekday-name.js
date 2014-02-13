
export default Ember.Handlebars.makeBoundHelper(function(value) {
  if (moment().day() === value) {
    return "Today";
  } else if (value === moment().add('days', 1).day()) {
    return "Tomorrow";
  } else {
    return moment().isoWeekday(value).format('dddd');
  }
});

