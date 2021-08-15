// TODO: Include packages needed for this application
const fs = require('fs');
const path = require("path");
const inquirer = require("inquirer");
const choice = require('inquirer/lib/objects/choice');
inquirer.registerPrompt("suggest", require("inquirer-prompt-suggest"));
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
            {
                type: 'suggest',
                name: 'github',
                message: "Enter your Github username? (Required)",
                default: ['John Doe'],
                suggestions: ['Rtonycloud'],
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'suggest',
                name: 'email',
                message: "what is your email address? (Required)",
                default: ['rtonycloud@gmail.com'],
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('You need to enter a email address!');
                        return false;
                    }
                }
            },
            {
                type: 'suggest',
                name: 'title',
                message: "what is your project's name? (Required)",
                default: ['rtonycloud'],
                suggestions: ['john doe'],
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project name!');
                        return false;
                    }
                }
            },
            {
                type: 'suggest',
                name: 'description',
                message: "Provide a description of the project (Required)",
                suggestions: ['na'],
                validate: descriptionInput => {
                    if (descriptionInput) {
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
                message: "Enter the GitHub link to your live project repo. (Required)",
                suggestions: ['https://github.io/', 'rTonyCloud.github.io'],
                validate: linkInput => {
                    if (linkInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project git.io live link!');
                        return false;
                    }
                }
            },        
            {
                type: 'input',
                name: 'installation',
                message: "Which command are required to run this application?",
                sugesstion: ['npm i -y']
            },
            {
                type: 'input',
                name: 'test',
                message: "?",
                default:['npm test']
                },
                {
                type: 'checkbox',
                name: 'languages',
                message: "which Technologies and/or Languages did you use? (Check all that apply)",
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node.js']
            },
            {
                type: 'list',
                name: 'licenses',
                message: "Pick a license for this software!",
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3.0', 'none'],   
            },
            {
            type: 'input',
            name: 'test',
            message: "What does  a user need to know about contributing?",
            },
            {
                type: 'input',
                name: 'contributors',
                message: "What does  a user need to know about contributing?",
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

