var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	name: attr(),
  entry: belongsTo('entry')
});