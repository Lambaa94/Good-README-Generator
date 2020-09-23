var inquirer = require("inquirer")
var fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");




// √
// array of questions for user
const questions = [ {
    type: "input",
    message: "What is your GitHub user name?",
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
    type:"input",
    message:"Write if you have any collaborators, used third-party assets or use tutorials.",
    name:"credits"
},
{
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing"
}

];



function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}

// function to initialize program
function init() { 
    inquirer.prompt(questions).then(function
        (answers) {
            
         const markdown = generateMarkdown(answers);
        writeToFile("GENERATED.md", markdown);
        
        });
}

// function call to initialize program
init();
