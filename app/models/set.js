var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
  entry: belongsTo('entry'),
	set_number: attr(),
  reps: attr(),
  weight: attr()
});