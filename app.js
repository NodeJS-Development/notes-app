// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Brayan.');
// fs.appendFileSync('notes.txt', ` I'm 27 years old.`)


// Challenge

// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

// const add = require('./utils');

// const sum = add(4, -2);

// console.log(sum);

//
// Challenge: Define and use a function in a new file
//
// 1. Create a new file called notes.js
// 2. Create getNotes function that retunrs "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the fuinction printing the message to console

// const validator = require('validator');

const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// console.log(msg);

// console.log(validator.isURL('https/mead.io'));

const greenMsg = chalk.green.bold.inverse('Success!');
// console.log(greenMsg);

// argv: argument vector -> array with arguments provided
// console.log(process.argv[2]);

// Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Removing a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  },
});

// create list command
yargs.command({
  command: 'list',
  describe: 'Listing out all the notes',
  handler() {
    notes.listNotes();
  },
});

// create read command
yargs.command({
  command: 'read',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string',
    },
  },
  describe: 'Reading a note',
  handler(argv) {
    notes.readNote(argv.title)
  },
});

yargs.parse();

// console.log(yargs.argv);




