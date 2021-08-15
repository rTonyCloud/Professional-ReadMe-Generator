// TODO: Include packages needed for this application
const fs = require('fs');
const path = require("path");
const inquirer = require("inquirer");
const choice = require('inquirer/lib/objects/choice');
inquirer.registerPrompt("suggest", require("inquirer-prompt-suggest"));
const generateMarkdown = require('./utils/generateMarkdown');
const { getMaxListeners } = require('process');



// TODO: Create an array of questions for user input
const questions = [
            {
                type: 'suggest',
                name: 'github',
                message: "Enter your Github username? (Required):",
                default: ['Rtonycloud'],
                suggestions: ['N/A'],
                validate: githubSuggest => {
                    if (githubSuggest) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "what is your email address? (Required):",
                default: ['rtonycloud@gmail.com'],
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You need to enter a email address!:');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'title',
                message: "what is your project's name? (Required):",
                default: ['read me generator'],
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project name!:');
                        return false;
                    }
                }
            },
            {
                type: 'suggest',
                name: 'description',
                message: "Provide a description of the project (Required):",
                suggestions: ['this is a read me generator to automatically generate application content for your github repo'],
                validate: descriptionSuggest => {
                    if (descriptionSuggest) {
                        return true;
                    } else {
                        console.log('You need to enter a project description!');
                        return false;
                    }
                }
            },
            {
                type: 'suggest',
                name: 'link',
                message: "Enter the GitHub link to your live project repo (Required):",
                suggestions: ['https://github.io/', 'rTonyCloud.github.io'],
                validate: linkSuggest => {
                    if (linkSuggest) {
                        return true;
                    } else {
                        console.log('You need to enter a project git.io live link!');
                        return false;
                    }
                }
            },        
            {
                type: 'suggest',
                name: 'installation',
                message: "Which command are required to run this application? (Required):",
                suggestions: ['npm i -y (required Node.js)'],
                validate: installationSuggest => {
                    if (installationSuggest) {
                        return true;
                    } else {
                        console.log('We are not setting up funitures from china. Please include instructions on how to properly run your application!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "usage",
                message: "What does the user need to know about using the repo? (Required):",
                default: "install node then run in the terminal node index.js",
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project git.io live link!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'test',
                message: "What is the command to run tests for this software? (Required):",
                default:['npm test'],
                validate: testinput => {
                    if (testinput) {
                        return true;
                    } else {
                        console.log('you dont test your code bro?');
                        return false;
                    }
                    }
                },
                {
                type: 'checkbox',
                name: 'languages',
                message: "which Technologies and/or Languages did you use? (Check all that apply)",
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node.js'],
                validate: languageCheckbox => {
                    if (languageCheckbox) {
                        return true;
                    } else {
                        console.log('Please select a programming language!');
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: "Pick a license for this software! (Required):",
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3.0', 'none'],   
                validate: licenseList => {
                    if (licenseList) {
                        return true;
                    } else {
                        console.log('Please include a license or pick none.');
                        return false;
                    }
                }
            },
            {
                type: 'suggest',
                name: 'contributors',
                message: "What does a user need to know about contributing to this repo?",
                suggestions: ['There are many ways in which anyone could contribute with resolving bugs, tickets and much more. If you have any questions, or concerns, please econtact us under the questions section'],
                validate: contributorsSuggest => {
                    if (contributorsSuggest) {
                        return true;
                    } else {
                        console.log('Please include detail example on way contributors can help!');
                        return false;
                    }
                }
            },
        ];

       // TODO: Create a function to write README file
        function writeToFile(fileName, data) {
            return fs.writeFileSync(path.join(process.cwd(), fileName), data);
        }
        // TODO: Create a function to initialize app
        function init() {
            inquirer.prompt(questions).then(inquirerResponses => {
                console.log(inquirerResponses);
                console.log('readme is working??..');
                writeToFile('README.md', generateMarkdown({...inquirerResponses}));
            });
        };

        // Function call to initialize app
        init();

