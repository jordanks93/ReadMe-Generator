var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");

// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "ReadME Generator"
    },

    {
        type: "input",
        message: "Give a description of your project:",
        name: "description",
        default: "This project will generate a readME markdown file based on the users input."
    },

    {
        type: "input",
        message: "Provide installion instructions for your project:",
        name: "installations",
    },

    {
        type: "input",
        message: "Is there any inportant usage information for your project?",
        name: "usage",
        default: "This project is used to automatically generate a readME file. In the terminal, make sure you are in the projects file directory. Then type node + 'filename'. You will then be prompted with questions to generate the readME.md for your project."
    },

    {
        type: "input",
        message: "List the contributors for this project:",
        name: "contributions",
    }

];


// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
