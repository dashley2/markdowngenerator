// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your Github username? (Required)",
        validate: userName => {
            if (userName) {
              return true;
            } else {
              console.log('Please enter your GitHub username!');
              return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title? [Required]",
        validate: title => {
            if (title) {
              return true;
            } else {
              console.log('Please enter a project title!');
              return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your project."
    },
    {
        type: "list",
        name: "license",
        message: "Please provide license used for this project.",
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "BSD 3-Clause",
            "None"
        ]
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repository?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repository?"
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
