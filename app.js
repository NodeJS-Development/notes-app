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




