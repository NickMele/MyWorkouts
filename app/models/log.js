var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	"day"        : belongsTo('day'),
  "completed"  : attr(),
  "entries"    : hasMany('entry')
});