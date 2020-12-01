const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)
// array of questions for user
const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description for your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation steps for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is your project used for?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the guidelines for contributing to your project?',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'How do you test your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select the type of license for your project',
      choices: ['test1', 'test2', 'test3']
    },
    {
      type: 'input',
      name: 'testing',
      message: 'How do you test your project?',
    },
  ])

// function to write README file
function generateReMe(answers) {



}

// function to initialize program
function init() {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateReMe(answers)))
    .catch((error) => console.error(error))
}

// function call to initialize program
init()
