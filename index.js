var inquirer = require("inquirer")
var fs = require("fs")
var markdown = require('./utils/generateMarkdown')


// √
// array of questions for user
const questions = [ {
    type: "input",
    message: "What is your user name?",
    name: "name"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
},
{
    type: "input",
    message: "What is your project's name?",
    name: "title"
},
{
    type: "input",
    message: "Write a short description.",
    name: "description"
},
{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
},
{
    type: "input",
    message: "What command should be run to install dependencies?",
    default: "npm i",
    name: "installation"

},
{
    type: "input",
    message: "What command should be run to run tests?",
    default: "npm test",
    name: "test"
},
{
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage"
},
{
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing"
}

];

// function to write README file
function writeToFile(fileName, data) {
    // this should be here?
    generateMarkdown();
    // and this?
    fs.writeFile("README.md", data)
}

// function to initialize program
function init() { 
    // this seems √
    inquirer.prompt(questions)
    // idk about this tho
    writeToFile()
}

// function call to initialize program
init();
