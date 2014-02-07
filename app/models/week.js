var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
  // slug: attr(),
  startDate: attr('date'),
  endDate: attr('date'),
  days: hasMany('day')
});