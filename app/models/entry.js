var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	workout: belongsTo('workout'),
  completed: attr(),
  sets: hasMany('set')
});