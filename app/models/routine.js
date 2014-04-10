var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	name       : attr(),
	workouts   : hasMany('workout'),
  days       : attr('array', {defaultValue: []})
});