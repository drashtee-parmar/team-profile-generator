const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
const path = require("path");
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "team.html");
const render = require("./src/generateTeamHtml");
const teamMbr = [];
const idArr = [];
console.log(
    'please Use `npm run reset` to reset the dist/ folder'
);

function appMenu() {
    /* This function is asking the user for the manager's name, id, email, and office number. */
    function managerQuestions() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the Manager's name?",
                    default: "James Harper",
                    validate: (value) => {
                        return value ? true : "Please enter the manager's name.";
                    },
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the Managers Employee Id?",
                    default: 11,
                    validate: (value) => {
                        return value ? true : "Please enter manager's id.";
                    },
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the Manager's email address?",
                    default: "mgr@test.com",
                    validate: (value) => {
                        return value ? true : "Please enter valid email address.";
                    },
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the office phone number?",
                    default: 1111111111,
                    validate: (value) => {
                        return value ? true : "Please enter manager's office number.";
                    },
                },
            ])
            .then((managerAnswers) => {
                const manager = new Manager(
                    managerAnswers.name,
                    managerAnswers.id,
                    managerAnswers.email,
                    managerAnswers.officeNumber
                );
                teamMbr.push(manager);
                idArr.push(managerAnswers.id);
                addMember();
            });
    }
 /* This function is asking the user for the engineer's name, id, email, and github repository. */
    function engineerQuestions() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the engineer's name?",
                    default: "Drashtee Parmar",
                    validate: (value) => {
                        return value ? true : "Please enter the engineer's name.";
                    },
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the engineer's employee Id?",
                    default: 2,
                    validate: (value) => {
                        return value ? true : "Please enter engineer's id.";
                    },
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the engineer's email address?",
                    default: "eng@test.com",
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
            ./* This is a callback function that is called when the user answers the questions. */
            then((engineerAnswers) => {
                const engineer = new Engineer(
                    engineerAnswers.name,
                    engineerAnswers.id,
                    engineerAnswers.email,
                    engineerAnswers.github
                );
                teamMbr.push(engineer);
                idArr.push(engineerAnswers.id);
                addMember();
            });
    }
/* This function is asking the user for the intern's name, id, email, and school. */
    function internQuestions() {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the intern's name?",
                    default: "Felicia George",
                    validate: (value) => {
                        return value ? true : "Please enter the intern's name.";
                    },
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the intern's Id?",
                    default: 3,
                    validate: (value) => {
                        return value ? true : "Please enter intern's id.";
                    },
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the intern's email address?",
                    default: "intern@test.com",
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
            .then((internAnswers) => {
                const intern = new Intern(
                    internAnswers.name,
                    internAnswers.id,
                    internAnswers.email,
                    internAnswers.school
                );
                teamMbr.push(intern);
                idArr.push(internAnswers.id);
                addMember();
            });
    }
/* This function is asking the user if they want to add another team member. */
    function addMember() {
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "addNewMember",
                    message: "Do you want to add another employee?",
                    choices: [
                        "Engineer",
                        "Intern",
                        "I don't want to add any team member",
                    ],
                },
            ])
            /* This is a callback function that is called when the user answers the questions. */
            .then(function (data) {
                switch (data.addNewMember) {
                    case "Engineer":
                        engineerQuestions();
                        break;
                    case "Intern":
                        internQuestions();
                        break;
                    case "I don't want to add any team member":
                        buildTeam();
                        break;
                }
            });
    }
    /* This function is creating a team. */
    function buildTeam() {
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR);
        }
        fs.writeFileSync(distPath, render(teamMbr), "utf-8");
    }
    managerQuestions();
}
appMenu();
