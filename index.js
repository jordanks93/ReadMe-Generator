// required packages
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// new README file that will be updated with user input
const newReadMe = "newREADME.md";

// array of questions for user
const questions = [

    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "README Generator"
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
        name: "install",
        default: '1.) Clone the repo from github 2.) Pull up the project in your file directory 3.) Type "npm i" into the console to install the required modules 4.) Type "node index.js" to run the program 5.) Follow the prompts until newREADME.md is generated in the project folder.'
    },

    {
        type: "input",
        message: "Is there any inportant usage information for your project?",
        name: "usage",
        default: "This project is used to automatically generate a readME file. In the terminal, make sure you are in the projects file directory. Then type node + 'filename'. You will then be prompted with questions to generate the readME.md for your project."
    },

    {
        type: "checkbox",
        message: "What license are you using for this project?",
        name: "license",
        choices: ["MIT", "Academic", "GNU", "ISC", "Mozilla", "APACHE", "GPL", "BSD", "No License"],
    },

    {
        type: "input",
        message: "How can I run a test?",
        name: "test",
        default: 'After the program is initalized with "node index.js". Click enter until a "newREADME.md" is generated to test if the program is working properly.'
    },

    {
        type: "input",
        message: "Who has contributed to this project?",
        name: "credits",
        default: "Jordan Stuckman"
    },

    {
        type: "input",
        message: "How can other contribute to this project?",
        name: "contributions",
        default: "Contact me by email or just submit a pull request."
    },

    {
        type: "input",
        message: "Enter your github username:",
        name: "githubName",
        default: "jordanks93"
    },

    {
        type: "input",
        message: "Enter your email address:",
        name: "email",
        default: "jordanks93@gmail.com"
    },

];


// function to write README file
function writeToFile(newReadMe, data) {
    const userInput = generateMarkdown(data);

    fs.writeFile(newReadMe, userInput, (error) => {
        if (error) {
            throw error;
        } else {
            console.log("README Generated");
        }
    });
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((response) => writeToFile(newReadMe, response));
}

// function call to initialize program
init();