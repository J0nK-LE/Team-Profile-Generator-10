const inquirer = require('inquirer');
const fs = require('fs');

const workTeam = []

const questions = [
    {
        type: 'input',
        message: 'What is the name of the team manager?',
        name: 'managerName',
        validate: (managerName) => {
            if (managerName === '') {
                return 'please enter a name'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the manager's employee id?",
        name: 'managerId',
        validate: (managerId) => {
            if (managerId === '') {
                return 'please enter an id'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the manager's email address?",
        name: 'managerEmail',
        validate: (managerEmail) => {
            if (managerEmail === '') {
                return 'please enter an email'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'managerOfficeNum',
        validate: (managerOfficeNum) => {
            if (isNaN(managerOfficeNum)) {
                return 'please enter an office number'
            } else {
                return true
            }
        }
    },
    {
        type: 'list',
        message: 'Would you like to add an employee?',
        name: 'selectMenu',
        choices: ['add engineer', 'add intern', 'finish team'],

    },
    {
        type: 'input',
        message: 'What is the name of the engineer?',
        name: 'engineerName',
        validate: (engineerName) => {
            if (engineerName === '') {
                return 'please enter a name'
            } else {
                return true
            }
        }

    },
    {
        type: 'input',
        message: "What is the engineer's employee id?",
        name: 'engineerId',
        validate: (engineerId) => {
            if (engineerId === '') {
                return 'please enter an id'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineerEmail',
        validate: (engineerEmail) => {
            if (engineerEmail === '') {
                return 'please enter an email'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub username?",
        name: 'engineerGit',
        validate: (engineerGit) => {
            if (engineerGit === '') {
                return 'please enter a GitHub username'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'What is the name of the intern?',
        name: 'internName',
        validate: (internName) => {
            if (internName === '') {
                return 'please enter a name'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the intern's employee id?",
        name: 'internId',
        validate: (internId) => {
            if (internId === '') {
                return 'please enter an id'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'internEmail',
        validate: (internEmail) => {
            if (internEmail === '') {
                return 'please enter an email'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'internSchool',
        validate: (internSchool) => {
            if (internSchool === '') {
                return 'please enter a school'
            } else {
                return true
            }
        }
    },
    

];


// function selectMenu(aFood) {
//     return function (answers) {
//         return answers[aFood];
//     };
// }

inquirer.prompt(questions).then((answers) => {

    console.log(JSON.stringify(answers, null, '  '));


});