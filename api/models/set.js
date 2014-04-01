var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
//-- define the schema
var setSchema = new Schema({
  set_number : { type: Number, required: true },
  reps: { type: Number },
  weight: { type: Number }
},
{
  versionKey: false
});

//-- create the model
var set = mongoose.model('set', setSchema);

//-- export
module.exports = {
  Set: set
};