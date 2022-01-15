const inquirer = require("inquirer");
const fs = requier("fs");

// The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes.
const MANAGER = require("./library/manager.js");
// const  EMPLOYEE = require('./library/employee.js');
const ENGINEER = require("./library/engineer.js");
const INTERN = require("./library/intern.js");

const OUTPUT_DIRECTORY = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIRECTORY, "team.html")
let team = [];

/*Initialize*/
const managerQuestions = () => {
    inquirer.prompt(
        [
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
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the Manager's email address?",
                validate: (value) => {
                    return value ? true : "Please enter valid email address.";
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the office phone number?",
                validate: (value) => {
                    return value ? true : "Please enter manager's office number.";
                }
            },
            {
                type: "list",
                name: "addNewMember",
                message: "Do you want to add another employee?",
                choices: ["Engineer", "Intern", "I don't want to add any team member"]
            }
        ]
    )
        .then((managerAnswers) => {
            const manager = new Manager(managereAnswer.id, managerAnswers.name, managerAnswers.eamil, managerAnswers.officeNumber)
            team.push(manager)
            switch (managerAnswers.addMember) {
                case 'Engineer' :
                    engineerQuestions();
                    break;
                case 'Intern' :
                    internQuestions();
                    break;
                default:
                    writeToFile('dist/team.html', generateTeam(team))
            }
        })
}


ENGINEER: [
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
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
        validate: (value) => {
            return value ? true : "Please enter valid email address.";
        }
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github repository's name?",
        validate: (value) => {
            return value ? true : "Please enter valid github repository name.";
        }
    },
    {
        type: "list",
        name: "addNew",
        message: "Do you want to add another employee?",
        choices: ["Yes", "No"]
    }
],
    INTERN
:
[
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (value) => {
            return value ? true : "Please enter the intern's name.";
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's Id?",
        validate: (value) => {
            return value ? true : "Please enter intern's id.";
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
        validate: (value) => {
            return value ? true : "Please enter valid email address.";
        }
    },
    {
        type: "input",
        name: "school",
        message: "What school is the intern attending?",
        validate: (value) => {
            return value ? true : "Please enter the school name.";
        }
    },
    {
        type: "list",
        name: "addNew",
        message: "Do you want to add another employee?",
        choices: ["Yes", "No"]
    }
]
}
;
/* 3 choices for selection: Manager, Enginner, Intern*/
const selectMemberType = [
    {
        type: "list",
        name: "memberType",
        message: "Please choose employee role",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

function addMember() {
    inquirer.prompt(selectMemberType)
        .then(answer => {
                if (answer.memberType === "Manager") {
                    if (canAddManager = true) {
                        inquirer.prompt(questions.MANAGER)
                            .then(answer => {
                                const manger = new Manager(
                                    answer.name,
                                    answer.id,
                                    answer.email,
                                    answer.officeNumber
                                )
                                team.push(manager);
                                canAddManager = false;
                                if (answer.addNew === "Yes") {
                                    addMember();
                                } else {
                                    generate()
                                }
                            })
                    }
                }
            }
        )
}

function generate() {
    fs.writeFileSync(outputPath,)
}
