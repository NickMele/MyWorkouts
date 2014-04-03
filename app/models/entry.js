var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	log: belongsTo('log'),
  workout: belongsTo('workout'),
  completed: attr(),
  sets: hasMany('set')
});