var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
//-- define the schema
var workoutSchema = new Schema({
  name      : { type: String, required: true, trim: true }
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