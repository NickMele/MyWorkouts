var attr = DS.attr,
	hasMany = DS.hasMany,
	belongsTo = DS.belongsTo;

export default DS.Model.extend({
	"date": attr('date'),
  "dayOfWeek": attr(),
  "totalRoutines": attr(),
  "totalWorkouts": attr(),
  "routines": hasMany('routine'),
  "workouts": hasMany('workout')
});