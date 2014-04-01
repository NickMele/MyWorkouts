var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
//-- define the schema
var routineSchema = new Schema({
  name      : { type: String, required: true, trim: true },
  workouts  : [{ type: Schema.Types.ObjectId, ref: 'workout' }],
  days      : [{ type: Number}]
},
{
  versionKey: false
});

//-- create the model
var routine = mongoose.model('routine', routineSchema);

//-- export
module.exports = {
  Routine: routine
};