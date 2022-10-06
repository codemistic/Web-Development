const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId, // to associate notes with user logged in
    ref:'user'
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Notes = mongoose.model('notes',NotesSchema);
module.exports = Notes;
