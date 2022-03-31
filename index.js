const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./library/employee");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const generateHtmlPage = require("./src/generateTeamHtml");

const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

let teamMbrs = [];
const idArray = [];

function createMenu() {


    function userQuestions() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "teamName",
                    message: "What is the name of your team?",
                    default: "Team Rocks",
                    validate: (value) => {
                        return value ? true : "Please enter the name of the team.";
                    },
                },
            ])
            .then(userAnswers => {
                const user = userAnswers.user;
                teamMbrs.push(user);
                managerQuestions();
            });
    }

    function managerQuestions() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the Manager's name?",
                    default: "Tim",
                    validate: (value) => {
                        return value ? true : "Please enter the manager's name.";
                    },
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the Managers Employee Id?",
                    default: "11",
                    validate: (value) => {
                        return value ? true : "Please enter manager's id.";
                    },
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the Manager's email address?",
                    default: "test@mgr.com",
                    validate: (value) => {
                        return value ? true : "Please enter valid email address.";
                    },
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the office phone number?",
                    default: "122334567",
                    validate: (value) => {
                        return value ? true : "Please enter manager's office number.";
                    },
                },
            ])
            .then(managerAnswers => {
                    const manager = new Manager(
                        managerAnswers.id,
                        managerAnswers.name,
                        managerAnswers.email,
                        managerAnswers.officeNumber
                    );
                    teamMbrs.push(manager);
                    idArray.push(managerAnswers.id)
                    addMember();
                }
            );
    }


    function addMember() {
        inquirer.prompt([
            {
                type: "list",
                name: "addNewMember",
                message: "Do you want to add another employee?",
                choices: ["Engineer", "Intern", "I don't want to add any team member"],
            },


        ])
            .then(function (data) {
                switch (data.addNewMember) {
                    case "Engineer":
                        engineerQuestions();
                        break;
                    case "Intern":
                        internQuestions();
                        break;
                    default:
                        buildTeam();
                        break
                }
            });
    }

    function engineerQuestions() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the engineer's name?",
                    default: "Drashtee",
                    validate: (value) => {
                        return value ? true : "Please enter the engineer's name.";
                    },
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the engineer's employee Id?",
                    default: "22",
                    validate: (value) => {
                        return value ? true : "Please enter engineer's id.";
                    },
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the engineer's email address?",
                    default: "test@engineer.com",
                    validate: (value) => {
                        return value ? true : "Please enter valid email address.";
                    },
                },
                {
                    type: "input",
                    name: "github",
                    message: "What is the engineer's github repository's name?",
                    default: "dparmar32",
                    validate: (value) => {
                        return value ? true : "Please enter valid github repository name.";
                    },
                },
            ])
            .then((engineerAnswers) => {
                const engineer = new Engineer(
                    engineerAnswers.name,
                    engineerAnswers.id,
                    engineerAnswers.email,
                    engineerAnswers.github
                );
                teamMbrs.push(engineer);
                idArray.push(engineerAnswers.id)
                addMember()
            });
    }

    function internQuestions() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the intern's name?",
                    default: "Francis",
                    validate: (value) => {
                        return value ? true : "Please enter the intern's name.";
                    },
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the intern's Id?",
                    default: "33",
                    validate: (value) => {
                        return value ? true : "Please enter intern's id.";
                    },
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the intern's email address?",
                    default: "test@intern.com",
                    validate: (value) => {
                        return value ? true : "Please enter valid email address.";
                    },
                },
                {
                    type: "input",
                    name: "school",
                    message: "What school is the intern attending?",
                    default: "Georgia Institute of Technology",
                    validate: (value) => {
                        return value ? true : "Please enter the school name.";
                    },
                },

            ])
            .then(internAnswers => {
                let intern = new Intern(
                    internAnswers.name,
                    internAnswers.id,
                    internAnswers.email,
                    internAnswers.school
                );


                teamMbrs.push(intern);
                idArray.push(internAnswers.id)
                addMember();

            });
    }


    function buildTeam() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, generateHtmlPage(teamMbrs), 'utf-8');
    }

    // managerQuestions
    userQuestions
}


// const writeFile = data => {
//     fs.writeFile('./dist/index.html', data, err => {
//         if (err){
//         console.log(err)
//         } else {
//             console.log("Team page is generated. Please check dist/index.html");
//
//         }
//     }
//     )
// };
//
// function buildTeam(){
//     console.log(team);
//     const genHtmlPage = generateHtmlPage(team);
//     writeFile(genHtmlPage);
// }

createMenu();
