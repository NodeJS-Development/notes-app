const fs = require('fs');

const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
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

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {

  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const removeNote = (title) => {

  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse.bold('Note removed!'));

    saveNotes(notesToKeep);

  } else {
    console.log(chalk.red.inverse.bold('No note found with title: ' + title));
  }

};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.yellow.bold.inverse('Your notes:'))
  notes.forEach(note => {
    return console.log(note.title);
  });
}

//  - Search for note by title
//  - Find note and print title (styled) and body (plain)
//  - No note found? Print error in red.
const readNote = (title) => {
  const notes = loadNotes();

  const noteToRead = notes.find(note => note.title === title);

  if (noteToRead) {
    console.log(chalk.bold.green(noteToRead.title));
    console.log(noteToRead.body)
  } else {
    console.log(chalk.red.inverse('Note not found'));
  }
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
};