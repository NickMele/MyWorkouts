var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	"week": belongsTo('week'),
  "date": attr('date'),
  "dayOfWeek": attr(),
  "routines": hasMany('routine'),
  "log": belongsTo('log')
});