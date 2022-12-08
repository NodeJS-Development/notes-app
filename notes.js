const fs = require('fs');

const chalk = require('chalk');

const getNotes = () => 'Your notes...';

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse.bold('New note added!'));
  } else {
    console.log(chalk.red.inverse.bold('Note title taken!'));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {

  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const removeNote = function (title) {

  const notes = loadNotes();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse.bold('Note removed!'));

    saveNotes(notesToKeep);

  } else {
    console.log(chalk.red.inverse.bold('No note found with title: ' + title));
  }

};

module.exports = {
  getNotes,
  addNote,
  removeNote,
};