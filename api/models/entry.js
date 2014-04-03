var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
//-- define the schema
var entrySchema = new Schema({
  log   : { type: Schema.Types.ObjectId, required: true, ref: 'log' },
  workout   : { type: Schema.Types.ObjectId, required: true, ref: 'workout' },
  completed : { type: Boolean, required: true, default: false },
  sets      : [{ type: Schema.Types.ObjectId, ref: 'set' }]
},
{
  versionKey: false
});

//-- create the model
var entry = mongoose.model('entry', entrySchema);

//-- export
module.exports = {
  Entry: entry
};