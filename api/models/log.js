var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
//-- define the schema
var logSchema = new Schema({
  day       : { type: Number, required: true },
  completed : { type: Boolean, default: false },
  entries   : [{ type: Schema.Types.ObjectId, ref: 'entry' }]
},
{
  versionKey: false
});

//-- create the model
var log = mongoose.model('log', logSchema);

//-- export
module.exports = {
  Log: log
};