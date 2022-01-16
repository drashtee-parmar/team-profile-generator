const Employee = require('./employee')

class Intern extends Employee{
    getSchool() { return this.school; }

    getRole() {return 'intern';}

    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
}

module.exports = Intern;