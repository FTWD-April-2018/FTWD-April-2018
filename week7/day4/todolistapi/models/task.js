
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const taskSchema = new Schema({
  title : String,
  content: String,
  doneYet  : Boolean,
  urgency: String
});

const Task = mongoose.model('Task', taskSchema);


module.exports = Task;
