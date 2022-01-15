const inquirer = require("inquirer");
const fs = requier("fs");

// The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes.
const MANAGER = require("./library/manager.js");
// const  EMPLOYEE = require('./library/employee.js');
const ENGINEER = require("./library/engineer.js");
const INTERN = require("./library/intern.js");

let team = [];

/*Initialize*/
const questions = {
     MANAGER: [
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
        validate : (value) => {
            return value ? true : "Please enter manager's id.";
        }
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?",
        validate : (value) => {
            return value ? true : "Please enter valid email address.";
        }
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office phone number?",
        validate : (value) => {
            return value ? true : "Please enter manager's office number.";
        }
      },
      {
          type: "list",
          name: "name",
          message: "Do you want to add another employee?",
          choices: ["Yes", "No"]
      }
    ],
    
};
