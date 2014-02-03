var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	day: attr(),
	routines: attr(),
  workouts: attr()
});