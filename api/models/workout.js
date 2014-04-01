var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
//-- define the schema
var workoutSchema = new Schema({
  name      : { type: String, required: true, trim: true },
  entry     : { type: Schema.Types.ObjectId, ref: 'entry' }
},
{
  versionKey: false
});

//-- create the model
var workout = mongoose.model('workout', workoutSchema);

//-- export
module.exports = {
  Workout: workout
};