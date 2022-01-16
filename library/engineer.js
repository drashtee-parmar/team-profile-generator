const Employee = require('./employee')

class Engineer extends Employee{
  getGithub() { return this.github; }

  getRole() { return this.role; }
  
  constructor(name, id, email, github) {
    super(name, id, email);
    this.role = "Engineer";
    this.github = github;
  }
}

module.exports = Engineer;
