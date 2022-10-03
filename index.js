const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require("./src/cardtemplate.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js")
const Intern = require("./lib/Intern.js")

let workTeam = []

const managerQuestions = [
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
            if ((managerOfficeNum === '')) {
                return 'please enter an office number'
            }
            else if (isNaN(managerOfficeNum)) {
                return 'please enter an office number'
            } else {
                return true
            }
        }
    }]
const engineerQuestion = [
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
    }]
const internQuestion = [
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

inquirer.prompt(managerQuestions).then((answers) => {
    let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNum)
    workTeam.push(manager)
    console.log(workTeam);
    addTeam()
});

function addTeam() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add an employee?',
            name: 'selectMenu',
            choices: ['add engineer', 'add intern', 'finish team'],

        }]).then(answers => {
            switch (answers.selectMenu) {
                case "add engineer":
                    addEngineer()
                    break;
                case "add intern":
                    addIntern()
                    break;
                default:
                    renderHtml()
                    break;
            }
        })
}

function addEngineer() {
    inquirer.prompt(engineerQuestion)
        .then((answers) => {
            let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGit)
            workTeam.push(engineer)
            console.log(workTeam);
            addTeam()
        });
}
function addIntern() {
    inquirer.prompt(internQuestion)
        .then((answers) => {
            let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            workTeam.push(intern)
            console.log(workTeam);
            addTeam()
        });
}

function renderHtml() {
    // console.log(JSON.stringify(workTeam, null, '  '));
    let teamHtml = generateHtml(workTeam)
    writeHtml(teamHtml)
}

function writeHtml(data){
    fs.writeFile("./dist/index.html", data, err => {
        if (err){
            return console.log(err)
        }
        console.log("Success")
    })
}