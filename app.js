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

const validator = require('validator');

const getNotes = require('./notes.js');
const msg = getNotes();

console.log(msg);

console.log(validator.isURL('https/mead.io'));
