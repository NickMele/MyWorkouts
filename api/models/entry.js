var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
//-- define the schema
var entrySchema = new Schema({
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