// TODO: Include packages needed for this application
const fs = require('fs');
const path = require("path");
const inquirer = require("inquirer");
const choices = require('inquirer/lib/objects/choice');
inquirer.registerPrompt("suggest", require("inquirer-prompt-suggest"));
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = readmeGenerator => {
        console.log(`
    ============================
    Add a New Read-Me-Generator!
    ============================
    `);

        if (!readmeGenerator.readme) {
            readmeGenerator.readme = [];
        }
        return inquirer.prompt([{
                type: 'input',
                name: 'github',
                message: "Enter your Github username? (Required)",
                suggestions: ['na', 'john doe'],
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
                type: 'input',
                name: 'email',
                message: "what is your email address? (Required)",
                suggestion: ['na', 'abc@gmail.com'],
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
                type: 'input',
                name: 'title',
                message: "what is your project's name? (Required)",
                suggestion: ['na'],
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
                type: 'input',
                name: 'description',
                message: "Provide a description of the project (Required)",
                suggestion: ['na'],
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
                type: 'input',
                name: 'link',
                message: "Enter the GitHub link to your project. (Required)",
                suggestion: ['na'],
                validate: linkInput => {
                    if (linkInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project GitHub link!');
                        return false;
                    }
                }
            },
            {
                type: 'checkbox',
                name: 'languages',
                message: "What did you this project with? (Check all that apply)",
                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
            },
            {
                type: 'choices',
                name: 'licenses',
                message: "Pick a license for this software!",
                choices: ['MIT', 'Apache', 'GNU', 'OpenBSD'],
                suggestion: ['MIT'],
                validate: licensesChoices => {
                    if (licensesChoices) {
                        return true;
                    } else {
                        console.log('You need to pick a license to proceed!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'contributing',
                message: "What does  a user need to know about contributing?",
            },
        ]);



        // TODO: Create a function to write README file
        function writeToFile(fileName, data) {
            return fs.writeFileSync(path.join(process.cwd(), fileName), data);
        }
        // TODO: Create a function to initialize app
        function init() {
            inquirer.prompt(questions).then(inquirerResponses => {
                console.log('readme is working??..')
                writeToFile('README.md', generateMarkdown({...inquirerResponses}));
            });
            }
        };

        // Function call to initialize app
        init();