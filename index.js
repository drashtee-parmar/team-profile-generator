const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
let team = [];
const userQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "teamName",
                message: "What is the name of your team?",
                validate: (value) => {
                    return value ? true : "Please enter the name of the team.";
                },
            },
        ])
        .then((userAnswers) => {
            const user = userAnswers.user;
            team.push(user);
            managerQuestions();
        });
};
const managerQuestions = () => {
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the Manager's name?",
                    validate: (value) => {
                        return value ? true : "Please enter the manager's name.";
                    },
                },
                {
                    type: "input",
                    name: "id",
                    message: "What is the Managers Employee Id?",
                    validate: (value) => {
                        return value ? true : "Please enter manager's id.";
                    },
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the Manager's email address?",
                    validate: (value) => {
                        return value ? true : "Please enter valid email address.";
                    },
                },
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is the office phone number?",
                    validate: (value) => {
                        return value ? true : "Please enter manager's office number.";
                    },
                },
            ])
            .then((managerAnswers) => {
                    const manager = new Manager(
                        managerAnswers.id,
                        managerAnswers.name,
                        managerAnswers.email,
                        managerAnswers.officeNumber
                    );
                    team.push(manager);
                    addMember();
                }
            )
        ;
    }
;
const engineerQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
                validate: (value) => {
                    return value ? true : "Please enter the engineer's name.";
                },
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's employee Id?",
                validate: (value) => {
                    return value ? true : "Please enter engineer's id.";
                },
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email address?",
                validate: (value) => {
                    return value ? true : "Please enter valid email address.";
                },
            },
            {
                type: "input",
                name: "github",
                message: "What is the engineer's github repository's name?",
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
            team.push(engineer);
            addMember()
        });
};
const internQuestions = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
                validate: (value) => {
                    return value ? true : "Please enter the intern's name.";
                },
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's Id?",
                validate: (value) => {
                    return value ? true : "Please enter intern's id.";
                },
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email address?",
                validate: (value) => {
                    return value ? true : "Please enter valid email address.";
                },
            },
            {
                type: "input",
                name: "school",
                message: "What school is the intern attending?",
                validate: (value) => {
                    return value ? true : "Please enter the school name.";
                },
            },

        ])
        .then((internAnswers) => {
            let intern = new Intern(
                internAnswers.name,
                internAnswers.id,
                internAnswers.email,
                internAnswers.school
            );
            team.push(intern);
            addMember();

        });
};


/* Same question repeated multiple time so creating adding new member */
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
                case "I don't want to add any team member":
                    buildTeam();
                    break
            }
        })
}


function buildTeam() {

}

userQuestions();
