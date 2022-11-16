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

const getNotes = require('./notes.js');
const msg = getNotes();

console.log(msg);

console.log(chalk.green.bold.inverse('Success!'));

// console.log(validator.isURL('https/mead.io'));

// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work

// Bonus: Use docs to mess around with other styles. Make text bold and inversed.


