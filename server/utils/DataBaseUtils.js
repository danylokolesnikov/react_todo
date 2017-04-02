const mongoose = require('mongoose'),
      config   = require('../../etc/config.json');

require('../models/Note.js');

const Note = mongoose.model('Note');
let db = {};

// Make connection with database. Use mongoose.
function setUpConnection () {
  mongoose.connect('mongodb://'+config.db.host+':'+config.db.port+'/'+config.db.name);
}

// Fucntion for get all notes from DB
function listNotes() {
    return Note.find();
}

// Function for create note in DB
function createNote(data) {
  // make object with detect model(Note)
  const note = new Note({
    title: data.title,
    text: data.text,
    color: data.color,
    createdAt: new Date()
  });

  // save object;
  return note.save()
}

// Function for delete element from data base;
function deleteNote(id) {
  return Note.findById(id).remove();
}


db.setUpConnection = setUpConnection;
db.listNotes = listNotes;
db.createNote = createNote;
db.deleteNote = deleteNote;

// exports all function;
module.exports = db;
