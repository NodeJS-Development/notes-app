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

const msg = notes.getNotes();

// console.log(msg);

// console.log(validator.isURL('https/mead.io'));

// Challenge: Use the chalk library in your project
//  
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work

// Bonus: Use docs to mess around with other styles. Make text bold and inversed.
const greenMsg = chalk.green.bold.inverse('Success!');
// console.log(greenMsg);

// argv: argument vector -> array with arguments provided
// console.log(process.argv[2]);

// Customize yargs version
yargs.version('1.1.0');

// add, remove, read, list

// Challenge: Add an option to yargs
//
// 1. Setup a body option for the add command
// 2. Configure a description, make it required and for it to be a string
// 3. Log the body value in the handler function
// 4. Test your work!

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
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  }
});

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
  handler: function (argv) {
    notes.removeNote(argv.title);
  }
});

// Challenge: Add two new commands
//
// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both commands to ensure correct output

// create list command
yargs.command({
  command: 'list',
  describe: 'Listing out all the notes',
  handler: function () {
    console.log('Listing out all the notes');
  }
});

// create read command
yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: function () {
    console.log('Reading a note');
  }
});

yargs.parse();

// console.log(yargs.argv);




