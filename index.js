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
      choices: ['Apache 2.0', 'Boost']
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your Email address?',
    },
])

const badges = [
  {
    Type: 'Apache 2.0',
    Badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  },
  {
    Type: 'Boost',
    Badge: '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
  },
]

const badgeReturn = (input) => {
  let badgeID = "default"

  for(let i = 0; i < badges.length; i++){
    for(const key in badges[i]){
      if (JSON.stringify(input) === JSON.stringify(badges[i][key])){
        badgeID = badges[i].Badge
      }
    }
  }
  
  return badgeID
}
// function to write README file
function generateReMe(answers) {
return `${badgeReturn(answers.license)}
## Table of Contents

#${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage

## Contribution

## Testing

## Questions
Github: ${answers.github}
Email: ${answers.email}`

}

// function to initialize program
function init() {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateReMe(answers)))
    .catch((error) => console.error(error))
}

// function call to initialize program
init()
