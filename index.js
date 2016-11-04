var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

var message2 = "Julian " + chalk.blue.underline.bold("Salari");
console.log(message2);

var message3 = "Julian " + chalk.inverse("Salari");
console.log(message3);

var message4 = "Julian " + chalk.strikethrough("Salari");
console.log(message4);

var message5 = "Julian " + chalk.hidden("Salari");
console.log(message5);